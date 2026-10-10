import { useCallback, useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, useReducedMotion } from 'framer-motion';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Startup from './components/Startup';

// Pages
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';

function shouldShowStartup() {
  if (window.location.pathname !== '/' || window.location.hash || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  try { return sessionStorage.getItem('qf-startup-bb84-v2') !== 'true'; } catch { return false; }
}

function AppContent() {
  const location = useLocation();
  const lenisRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const previousPath = useRef(null);
  const [showStartup, setShowStartup] = useState(shouldShowStartup);
  const [introFinished, setIntroFinished] = useState(false);
  const finishStartup = useCallback(() => {
    setShowStartup(false);
    setIntroFinished(true);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50, disable: !!reduceMotion });
    if (reduceMotion) return;
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      syncTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    lenisRef.current = lenis;
    let frame;

    function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduceMotion]);

  // Location keys also change when Home or the same section is clicked again.
  useEffect(() => {
    const immediate = reduceMotion || previousPath.current === null || previousPath.current !== location.pathname;
    previousPath.current = location.pathname;
    const frame = requestAnimationFrame(() => {
      const target = location.hash ? document.getElementById(location.hash.slice(1)) : null;
      const offset = target ? -(document.querySelector('header')?.offsetHeight || 0) : 0;
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target || 0, { offset, immediate, force: true });
      } else {
        window.scrollTo({ top: target ? target.getBoundingClientRect().top + window.scrollY + offset : 0, behavior: immediate ? 'instant' : 'smooth' });
      }
      AOS.refresh();
    });
    return () => cancelAnimationFrame(frame);
  }, [location.key, location.pathname, location.hash, reduceMotion]);

  return (
    <>
      {showStartup && <Startup onComplete={finishStartup} />}
      <div className={introFinished ? 'site-arrived' : undefined} inert={showStartup}>
      <div className="quantum-grid-bg"></div>
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

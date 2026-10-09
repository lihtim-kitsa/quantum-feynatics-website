import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence } from 'framer-motion';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Startup from './components/Startup';

// Pages
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';

function shouldShowStartup() {
  if (window.location.pathname !== '/' || window.location.hash || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  try { return sessionStorage.getItem('qf-startup-bb84-v1') !== 'true'; } catch { return false; }
}

function AppContent() {
  const location = useLocation();
  const [showStartup, setShowStartup] = useState(shouldShowStartup);
  const [introFinished, setIntroFinished] = useState(false);
  const finishStartup = useCallback(() => {
    setShowStartup(false);
    setIntroFinished(true);
  }, []);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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

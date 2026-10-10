import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import './Header.css';
import './PortraitMenu.css';

const menuItems = ['Home', 'About', 'Members', 'Projects', 'Events', 'Contact'];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portraitStyle, setPortraitStyle] = useState(null);
  const triggerRef = useRef(null);
  const dialogRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const openMenu = () => {
    const portrait = document.querySelector('main .feynman-portrait');
    const rect = portrait?.getBoundingClientRect();
    setPortraitStyle(rect && rect.top < window.innerHeight && rect.bottom > 150
      ? { left: rect.left, top: rect.top, width: rect.width, height: rect.height, bottom: 'auto', transform: 'none' }
      : null);
    setMenuOpen(true);
  };

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    const backgrounds = [...document.querySelectorAll('main, footer')];
    const previousInert = backgrounds.map(element => element.inert);
    document.body.style.overflow = 'hidden';
    backgrounds.forEach(element => { element.inert = true; });
    dialogRef.current?.querySelector('button')?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      backgrounds.forEach((element, index) => { element.inert = previousInert[index]; });
      trigger?.focus();
    };
  }, [menuOpen]);

  const handleDialogKey = event => {
    if (event.key === 'Escape') setMenuOpen(false);
    if (event.key !== 'Tab') return;
    const controls = [...dialogRef.current.querySelectorAll('a[href], button')];
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  };

  return (
    <>
      <header className={`header ${menuOpen ? 'header-menu-open' : ''}`}>
        <div className="container header-container">
          <Link to="/" className="logo-text mono"><span aria-label="Quantum Feynatics">QF</span><span className="brand-star" aria-hidden="true">✳</span></Link>
          <Link className="header-about mono" to="/#about">ABOUT THE COLLECTIVE</Link>
          <button ref={triggerRef} type="button" className="menu-trigger" onClick={openMenu} aria-expanded={menuOpen} aria-controls="site-menu">
            <span className="mono menu-label">MENU</span><span className="hamburger" aria-hidden="true"><span></span><span></span></span>
          </button>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.div ref={dialogRef} className="portrait-menu" id="site-menu" role="dialog" aria-modal="true" aria-label="Site navigation" onKeyDown={handleDialogKey}
            initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : .2 }}>
            <div className="portrait-menu-top mono"><span>QF / CHOOSE YOUR NEXT EXPLORATION</span><button type="button" onClick={() => setMenuOpen(false)}>CLOSE ×</button></div>
            <div className="menu-orbit" aria-hidden="true"></div>
            <img className="menu-feynman" src="/images/feynman-poster.png" alt="" style={portraitStyle || undefined} />
            <nav className="portrait-menu-nav" aria-label="Main navigation">
              <ul>
                {menuItems.map((item, index) => {
                  const target = item === 'Home' ? '/' : item === 'Events' ? '/events' : `/#${item.toLowerCase()}`;
                  const label = <><span className="menu-index mono">0{index + 1}</span><span>{item}</span><span className="menu-link-arrow" aria-hidden="true">↗</span></>;
                  return (
                    <motion.li className={`portrait-menu-item menu-position-${index}`} key={item}
                      initial={reduceMotion ? false : { opacity: 0, x: index < 3 ? -80 : 80 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: reduceMotion ? 0 : .08 + index * .055, duration: .3 }}>
                      <Link to={target} onClick={() => setMenuOpen(false)}>{label}</Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
            <p className="portrait-menu-bottom mono">QUESTION EVERYTHING. EXPLORE THE POSSIBLE.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Header;

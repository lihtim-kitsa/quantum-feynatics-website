import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="header">
        <div className="container header-container">
          <Link to="/" className="logo-text mono">
            <img width="100" src="public/images/quantum-feynatics-group-high-resolution-logo-white-transparent.png" alt="Quantum Feynatics" />
          </Link>

          <div className="menu-trigger" onClick={toggleMenu}>
            <span className="mono menu-label">{menuOpen ? 'CLOSE' : 'MENU'}</span>
            <div className={`hamburger ${menuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fullscreen-menu"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="container menu-content">
              <nav className="overlay-nav">
                <motion.ul>
                  {['Home', 'About', 'Members', 'Projects', 'Events', 'Contact'].map((item, i) => {
                    const isHashLink = item !== 'Home' && item !== 'Events';
                    const target = item === 'Home' ? '/' : item === 'Events' ? '/events' : `/#${item.toLowerCase()}`;
                    return (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                      >
                        {isHashLink ? (
                          <a href={target} onClick={toggleMenu}>{item}</a>
                        ) : (
                          <Link to={target} onClick={toggleMenu}>{item}</Link>
                        )}
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </nav>

              <motion.div
                className="menu-data"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="data-block">
                  <span className="mono text-muted">LOCATION</span>
                  <p className="mono">BITS Pilani Hyderabad Campus</p>
                </div>
                <div className="data-block">
                  <span className="mono text-muted">CONTACT</span>
                  <a href="mailto:ieee.bphc@hyderabad.bits-pilani.ac.in" className="mono">ieee.bphc@hyderabad.bits-pilani.ac.in</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer border-top">
      <div className="container footer-container">
        <div className="footer-left">
          <h2>QUANTUM FEYNATICS</h2>
          <p className="mono text-muted">© {new Date().getFullYear()} BITS Pilani Hyderabad.</p>
        </div>
        
        <div className="footer-links">
          <a href="https://github.com/ieee-sb-bits-hyd/Quantum-Team-Projects" target="_blank" rel="noreferrer" className="mono">GITHUB</a>
          <a href="#" className="mono">LINKEDIN</a>
          <a href="#" className="mono">INSTAGRAM</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

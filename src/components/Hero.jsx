import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-top" data-aos="fade-down">
          <span className="mono">BPHC / BITS PILANI</span>
          <div className="bloch-sphere-icon"></div>
        </div>
        
        <h1 className="hero-title">
          <span className="line" data-aos="fade-up" data-aos-delay="100">Quantum</span>
          <span className="line" data-aos="fade-up" data-aos-delay="200">Feynatics.</span>
        </h1>
        
        <div className="hero-bottom" data-aos="fade-up" data-aos-delay="300">
          <p className="hero-desc">
            Demystifying quantum computing through projects, workshops, and collaborative research.
          </p>
          <a href="#about" className="btn-minimal">
            Explore <span className="arrow">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

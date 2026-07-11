import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-grid">
          
          <div className="about-item border-top" data-aos="fade-up">
            <span className="mono">01 / MISSION</span>
            <h2>Fostering a vibrant quantum culture on campus.</h2>
            <p className="text-muted">Founded at BPHC, we provide resources, facilitate collaborative projects, and connect students with experts in the field of quantum computation.</p>
          </div>

          <div className="about-item border-top" data-aos="fade-up" data-aos-delay="100">
            <span className="mono">02 / INCLUSIVITY</span>
            <h2>Open to all.</h2>
            <p className="text-muted">Whether you're a physicist, computer scientist, or just quantum-curious, we welcome you to join our journey into the unknown. We start from the absolute basics.</p>
          </div>

          <div className="about-item border-top" data-aos="fade-up" data-aos-delay="200">
            <span className="mono">03 / THE FUTURE</span>
            <h2>Why Quantum?</h2>
            <p className="text-muted">Quantum computing promises to revolutionize medicine, materials science, and AI. By understanding superposition and entanglement, we unlock processing power unimaginable to classical systems.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

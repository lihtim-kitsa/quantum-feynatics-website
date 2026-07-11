import React from 'react';
import './Focus.css';

const Focus = () => {
  return (
    <section className="section-padding focus-section">
      <div className="container">
        
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Our Focus</h2>
        </div>

        <div className="focus-grid">
          <div className="focus-item border-top" data-aos="fade-right">
            <span className="mono">THEORY</span>
            <div className="focus-content">
              <h3>Academic Study</h3>
              <p className="text-muted">Dive deep into the mathematical foundations, quantum mechanics, algorithms, and error correction techniques that make quantum computation possible.</p>
            </div>
          </div>
          
          <div className="focus-item border-top" data-aos="fade-left">
            <span className="mono">APPLICATION</span>
            <div className="focus-content">
              <h3>Practical Engineering</h3>
              <p className="text-muted">Implement algorithms using Qiskit, run simulations, and execute circuits on real IBM Quantum hardware. Bridging the gap from theory to physical application.</p>
            </div>
          </div>
        </div>

        <div className="tech-stack-container border-top" data-aos="fade-up">
          <span className="mono text-muted">FRAMEWORKS & PLATFORMS</span>
          <div className="tech-slider">
            <div className="tech-track">
              {['Qiskit', 'IBM Quantum', 'Pennylane', 'Cirq', 'Q#', 'Qiskit', 'IBM Quantum', 'Pennylane', 'Cirq', 'Q#'].map((tech, i) => (
                <div className="tech-item" key={i}>{tech}</div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Focus;

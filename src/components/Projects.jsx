import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">

        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Our Projects</h2>
        </div>

        <div className="projects-grid">
          <div className="project-item" data-aos="fade-up">
            <div className="project-image-wrapper">
              <img src="/images/TicTacToe.png" alt="Quantum Tic-Tac-Toe" />
            </div>
            <div className="project-meta">
              <span className="mono text-muted">2024 / GAME / SUPERPOSITION</span>
              <h3>Quantum Tic-Tac-Toe</h3>
              <p>Deepening the understanding of the quantum principle of superposition through an interactive and engaging game. Experience how quantum mechanics changes classical strategies.</p>
              <a href="https://github.com/ieee-sb-bits-hyd/Quantum-Team-Projects" target="_blank" rel="noreferrer" className="btn-minimal">
                View Source ↗
              </a>
              <a href="https://quantumtictactoe.vercel.app/" target="_blank" rel="noreferrer" className="btn-minimal">
                Open Game Site ↗
              </a>
            </div>
          </div>
          {/* Future projects can be added here in the same format */}
        </div>

      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import './EventsPage.css';

const EventsPage = () => {
  return (
    <div className="events-page section-padding">
      <div className="container">

        <div className="section-header" data-aos="fade-up">
          <h1 className="section-title">Events</h1>
        </div>

        <div className="events-list border-top">

          <div className="event-item border-bottom" data-aos="fade-up">
            <div className="event-meta">
              <span className="mono text-muted">NOV 7-9 / 2025</span>
              <span className="mono text-muted">BPHC</span>
            </div>
            <div className="event-content">
              <h2>QuantumVerse Vol. 3.0</h2>
              <p className="text-muted">A unique three-day event hosted by Quantum Feynatics and IBM Quantum. Combining hands-on workshops with a competitive 12-hour hackathon.</p>
            </div>
            <div className="event-action">
              <a href="https://ieee-sb-bits-hyd.github.io/quantum-feynatics/quantumverse/quantumverse.html" className="btn-minimal">
                VIEW EVENT ↗
              </a>
            </div>
          </div>

          <div className="event-item border-bottom" data-aos="fade-up" data-aos-delay="100">
            <div className="event-meta">
              <span className="mono text-muted">TBA / 2026</span>
              <span className="mono text-muted">ONLINE</span>
            </div>
            <div className="event-content">
              <h2>Qiskit Fall Fest</h2>
              <p className="text-muted">Upcoming iteration of the annual IBM Qiskit Fall Fest. Details and registrations will be announced soon.</p>
            </div>
            <div className="event-action">
              <span className="btn-minimal disabled text-muted" style={{ borderColor: 'transparent' }}>
                COMING SOON
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default EventsPage;

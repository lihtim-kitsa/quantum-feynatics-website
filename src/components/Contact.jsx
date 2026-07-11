import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">

        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Initiate Contact</h2>
        </div>

        <div className="contact-grid">

          <div className="contact-info" data-aos="fade-right">
            <p className="text-muted">Whether you're interested in collaborating, joining the club, or just want to discuss the latest paper on error correction, reach out.</p>

            <div className="info-block">
              <span className="mono text-muted">EMAIL</span>
              <a href="mailto:ieee.bphc@hyderabad.bits-pilani.ac.in" className="contact-link">ieee.bphc@hyderabad.bits-pilani.ac.in</a>
            </div>

            <div className="info-block">
              <span className="mono text-muted">LOCATION</span>
              <p>BITS Pilani Hyderabad Campus<br />Secunderabad, Telangana 500078</p>
            </div>
          </div>

          <form className="contact-form" data-aos="fade-left">
            <div className="form-group border-bottom">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="form-group border-bottom">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group border-bottom">
              <textarea rows="4" placeholder="Message" required></textarea>
            </div>
            <button type="submit" className="btn-minimal mt-20">TRANSMIT ↗</button>
          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;

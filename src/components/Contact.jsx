import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">

        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Contact Us</h2>
        </div>

        <div className="contact-content">

          <div className="contact-info" data-aos="fade-right">
            <p className="text-muted">Want to join the club or collaborate? Get in touch by email.</p>

            <div className="info-block">
              <span className="mono text-muted">EMAIL</span>
              <a href="mailto:ieee.bphc@hyderabad.bits-pilani.ac.in" className="contact-link">ieee.bphc@hyderabad.bits-pilani.ac.in</a>
            </div>

          </div>


        </div>

      </div>
    </section>
  );
};

export default Contact;

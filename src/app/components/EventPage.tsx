import Header from "./Header";
import Timeline from "./Timeline";
import SiteEffects from "./SiteEffects";
import WormholeBackground from "./WormholeBackground";
import { asset } from "../data/site";
import { programme } from "../data/programme";

const speakerSessions = programme.flatMap((day) =>
  day.sessions.flatMap((session) => session.presenter
    ? [{ name: session.presenter, session: session.title, date: day.date, time: session.time }]
    : []),
);

export default function EventPage() {
  return (
    <>
      <SiteEffects />

    <div id="announcement-bar">
        <p>✨ Quantumverse Vol. 4.0 — 23–25 October 2026 ✨</p>
    </div>
    <div className="custom-cursor"></div>
    <WormholeBackground />
    <div className="aurora-bg"></div>

    <Header />

    <main>
        <section id="section-hero" className="fade-in-up">
            <div className="container hero-container">
                <h1 className="hero-title animated-gradient">
                    Quantumverse Vol. 4.0
                </h1>
                <h2 className="hero-subtitle">QML &amp; Qiskit with Experts from IBM</h2>
                <p className="hero-date">📅 23–25 October 2026</p>
                <p className="hero-date">📍BITS Pilani Hyderabad Campus</p>
                <p className="edition-notice">Expert talks and hands-on sessions, 23–25 October 2026. Explore the day-wise programme below. Team and sponsors shown below are from Vol. 3.0 for reference.</p>
                <div className="hero-cta">
                    <a href="#section-contact"
                        className="hero-register-button">
                        Get Vol. 4.0 Updates
                    </a>
                </div>
            </div>
        </section>

        <section id="section-glance" className="fade-in-up">
            <div className="container section-container">
                <div className="grid-2-col">
                    <div className="glance-text">
                        <h2 className="section-title animated-gradient">Enter the Era of Quantum
                            Utility.</h2>
                        <p className="section-paragraph">
                            Quantumverse Vol. 4.0 brings the Quantum Feynatics community together in collaboration
                            with experts from IBM. Through expert-led talks and hands-on sessions, explore
                            quantum machine learning (QML) and Qiskit, connecting quantum concepts with practical learning.
                        </p>
                    </div>
                    <div className="glance-images">
                        <div className="image-bubble-1 glass-effect">
                            <img src={asset("quantumverse-qubit.svg")} width="300" height="300"
                                loading="lazy" decoding="async" alt="Quantumverse qubit illustration" />
                        </div>
                        <div className="image-bubble-2 glass-effect">
                            <img src={asset("quantumverse-v4-badge.svg")} width="300" height="300"
                                loading="lazy" decoding="async" alt="Quantumverse Vol. 4.0 — QML and Qiskit, 23–25 October 2026" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="section-learning" className="fade-in-up">
            <div className="container section-container">
                <div className="grid-2-col">
                    <div className="learning-visual">
                        <img src={asset("quantumverse-learning.svg")}
                            alt="Quantumverse circuit and machine learning illustration" width="600" height="400" loading="lazy"
                            decoding="async" />
                    </div>
                    <div className="learning-text">
                        <h2 className="section-title animated-gradient">From Quantum Concepts to Code
                        </h2>
                        <p className="section-paragraph">
                            Learn directly from experts from IBM through talks and hands-on sessions on QML and
                            Qiskit. Bring your questions, explore ideas, and put your learning into practice
                            with the Quantum Feynatics community.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="section-info" className="fade-in-up">
            <div className="container text-center max-w-5xl">
                <h2 className="section-title animated-gradient section-title-margin">Talks &amp; Hands-on Sessions</h2>
                <div className="info-grid">
                    <div className="info-card glass-effect">
                        <div className="info-icon info-icon-purple">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 12l4.179 2.25m0 0l5.571 3 5.571-3m0 0l4.179-2.25L12 9.75l-5.571 2.25z" />
                            </svg>
                        </div>
                        <h3>Talks with IBM Experts</h3>
                        <ul className="info-list info-list-event">
                            <li>Experts from <strong>IBM</strong> will conduct talks on QML and Qiskit.</li>
                            <li>Explore quantum computing ideas and discuss your questions with the experts.</li>
                            <li>See the day-wise programme below for session topics, timings, and session leads.</li>
                        </ul>
                    </div>
                    <div className="info-card glass-effect">
                        <div className="info-icon info-icon-blue">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h3.75" />
                            </svg>
                        </div>
                        <h3>Hands-on QML &amp; Qiskit</h3>
                        <ul className="info-list info-list-hackathon">
                            <li>Join <strong>hands-on sessions</strong> on quantum machine learning and Qiskit conducted by experts from IBM.</li>
                            <li>Put concepts into practice through guided learning and experimentation.</li>
                            <li>Prerequisites, software setup, and participation details will be shared before the sessions.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section id="section-organizers" className="fade-in-up">
            <div className="container text-center max-w-5xl">
                <h2 className="section-title animated-gradient section-title-margin">The Minds Behind The
                    Verse</h2>
                <div className="organizer-grid">
                    <div className="organizer-card glass-effect">
                        <img src={asset("quantum-feynatics-group-high-resolution-logo-white-transparent.png")}
                            alt="Quantum Feynatics Group Logo" width="300" height="75" loading="lazy" decoding="async" />
                        <p>
                            Quantum Feynatics Group is dedicated to exploring the fascinating world of quantum tech. We
                            aim to make
                            quantum knowledge
                            accessible while building a vibrant community of innovators.
                        </p>
                    </div>
                    <div className="organizer-card glass-effect">
                        <img src={asset("ibm-logo.svg")} alt="IBM logo" width="320" height="128"
                            loading="lazy" decoding="async" />
                        <p>
                            For Quantumverse Vol. 4.0, we are collaborating with experts from IBM who will
                            conduct talks and hands-on sessions on QML and Qiskit. Explore the day-wise
                            programme below for session details.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="section-team" className="fade-in-up">
            <div className="container text-center max-w-6xl">
                <h2 className="section-title animated-gradient section-title-margin">Meet the Vol. 3.0 Core Team
                </h2>

                <div className="lead-organizer">
                    <div className="team-member-card">
                        <img src={asset("Mithil_Astik.jpg")} alt="Lead Organizer" className="lead-image" width="160"
                            height="160" loading="lazy" decoding="async" />
                        <h3>Mithil Astik</h3>
                        <p>Lead Organizer</p>
                    </div>
                </div>

                <div className="team-grid">
                    <div className="team-member-card">
                        <img src={asset("Mansee.jpg")} alt="Team Member" width="128" height="128" loading="lazy"
                            decoding="async" />
                        <h3>Mansee Sukant Rana</h3>
                        <p></p>
                    </div>
                    <div className="team-member-card">
                        <img src={asset("pratyush.jpg")} alt="Team Member" width="128" height="128" loading="lazy"
                            decoding="async" />
                        <h3>Pratyush Jha</h3>
                        <p></p>
                    </div>
                    <div className="team-member-card">
                        <img src={asset("SreePragnya.jpg")} alt="Team Member" width="128" height="128" loading="lazy"
                            decoding="async" />
                        <h3>Sree Pragnya Ramachandrula</h3>
                        <p></p>
                    </div>
                    <div className="team-member-card">
                        <img src={asset("cri.jpg")} alt="Team Member" width="128" height="128" loading="lazy"
                            decoding="async" />
                        <h3>Cris Varshith Dantham Joseph</h3>
                        <p></p>
                    </div>
                    <div className="team-member-card">
                        <img src={asset("Anshul-Rath.jpg")} alt="Team Member" width="128" height="128" loading="lazy"
                            decoding="async" />
                        <h3>Anshul Rath</h3>
                        <p></p>
                    </div>
                    <div className="team-member-card">
                        <img src={asset("Mandar-Kirkire.jpg")} alt="Team Member" width="128" height="128" loading="lazy"
                            decoding="async" />
                        <h3>Mandar Kirkire</h3>
                        <p></p>
                    </div>
                    <div className="team-member-card">
                        <img src={asset("Aaditya-Rajput_edited.jpg")} alt="Team Member" width="128" height="128"
                            loading="lazy" decoding="async" />
                        <h3>Aaditya Rajput</h3>
                        <p></p>
                    </div>
                    <div className="team-member-card">
                        <img src={asset("Rajas-Bamb.jpeg")} alt="Team Member" width="128" height="128" loading="lazy"
                            decoding="async" />
                        <h3>Rajas Bamb</h3>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>

        <section id="section-sponsors" className="fade-in-up">
            <div className="container text-center max-w-5xl">
                <h2 className="section-title animated-gradient section-title-margin">Sponsors from Vol. 3.0</h2>
                <div className="sponsor-grid-wrapper">
                    <div className="organizer-card sponsor-card-light">
                        <img src={asset("bqp.png")} alt="BQP Logo" width="300" height="150" loading="lazy"
                            decoding="async" />
                        <p>
                            BQP is redefining engineering simulation with BQPhy®, a quantum-powered platform built to
                            solve the toughest problems in aerospace, space, and defense. Combining advanced solvers
                            with quantum-inspired algorithms, it delivers unmatched speed and precision on today’s
                            systems.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="section-speakers" className="fade-in-up">
            <div className="container text-center max-w-6xl">
                <h2 className="section-title animated-gradient section-title-margin">Meet Our Speakers &amp; Session Leads</h2>
                <div className="speaker-grid">
                    {speakerSessions.map((speaker) => (
                        <div className="speaker-card glass-effect" key={speaker.name}>
                            <h3>{speaker.name}</h3>
                            <p className="speaker-title">{speaker.session}</p>
                            <p className="speaker-description">{speaker.date} · {speaker.time} IST</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <Timeline />

        <section id="section-contact" className="fade-in-up">
            <div className="container text-center max-w-4xl">
                <h2 className="section-title animated-gradient">Get In Touch</h2>
                <p className="contact-subtitle">
                    Have questions or want to get involved? We'd love to hear from you. Reach out to us through any of
                    the
                    channels below.
                </p>
                <div className="contact-card glass-effect">
                    <div className="contact-info">
                        <div className="contact-item">
                            <h3>Email Us</h3>
                            <a href="mailto:ieee.sb@hyderabad.bits-pilani.ac.in">ieee.sb@hyderabad.bits-pilani.ac.in</a>
                        </div>
                        <div className="contact-item">
                            <h3>Follow Us</h3>
                            <div className="social-icons">
                                <a aria-label="IEEE BPHC on LinkedIn" href="https://www.linkedin.com/company/ieee-student-branch-bits-pilani-hyderabad-campus/"
                                    target="_blank" rel="noopener noreferrer">
                                    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                            clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a aria-label="IEEE BPHC on Instagram" href="https://www.instagram.com/ieee.bphc/" target="_blank"
                                    rel="noopener noreferrer">
                                    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664 4.771 4.919 4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <footer id="section-footer">
        <div className="container">
            <p>&copy; 2026 Quantum Feynatics, IEEE BPHC. All Rights Reserved.</p>
        </div>
    </footer>

    </>
  );
}

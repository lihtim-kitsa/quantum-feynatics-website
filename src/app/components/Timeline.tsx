"use client";

import { useState } from "react";
import { programme } from "../data/programme";

export default function Timeline() {
  const [openDay, setOpenDay] = useState<number | null>(null);

  return (
    <section id="section-timeline" className="fade-in-up">
      <div className="container max-w-4xl">
        <h2 className="section-title animated-gradient section-title-margin text-center">
          Your Journey Through The Verse
        </h2>
        <p className="programme-note">23–25 October 2026 · All times IST</p>
        <div className="timeline-container">
          {programme.map((day, index) => {
            const open = openDay === index;
            const panelId = `timeline-panel-${index}`;
            const buttonId = `timeline-button-${index}`;
            return (
              <div key={day.day} className={`timeline-card glass-effect timeline-gradient-${day.tone}`}>
                <button
                  type="button"
                  className="timeline-button"
                  id={buttonId}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenDay(open ? null : index)}
                >
                  <span>{day.day}<small className="timeline-date"><time dateTime={day.dateTime}>{day.date}</time></small></span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="timeline-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className="timeline-content-wrapper"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!open}
                  inert={!open}
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div>
                    <div className="timeline-content">
                      <ul>
                        {day.sessions.map((session) => (
                          <li key={session.title}>
                            <div className="session-header">
                              <h3>{session.title}</h3>
                              <p>{session.time}</p>
                            </div>
                            {session.presenter && <p className="session-description">Session lead: {session.presenter}</p>}
                            {session.topics && (
                              <dl className="session-topics">
                                {session.topics.map((topic) => (
                                  <div key={topic.title}>
                                    <dt>{topic.title}</dt>
                                    <dd>{topic.presenter}</dd>
                                  </div>
                                ))}
                              </dl>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

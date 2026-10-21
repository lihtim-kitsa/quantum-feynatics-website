import React from 'react';
import { motion } from 'framer-motion';
import './Members.css';

const Members = () => {
  const currentMembers = [
    { name: "Mithil Astik", role: "Quantum Feynatics Lead", img: "/images/Mithil_Astik.jpg", linkedin: "https://www.linkedin.com/in/mithil-astik-49389b325/" },
    { name: "Mansee Sukant Rana", role: "Quantum Feynatics Lead", img: "/images/Mansee.jpg", linkedin: "https://www.linkedin.com/in/mansee-rana-358411354/" },
    { name: "Pratyush Jha", role: "Feynatic Prime", img: "/images/pratyush.jpeg", linkedin: "https://www.linkedin.com/in/pratyush-j-19b485339/" },
    { name: "Sree Pragnya R", role: "Feynatic Prime", img: "/images/SreePragnya.jpg", linkedin: "https://www.linkedin.com/in/sree-pragnya-ramachandrula-295716351/" },
    { name: "Cris Varshith DJ", role: "Feynatic Prime", img: "/images/cri.jpg", linkedin: "https://www.linkedin.com/in/cris-varshith-dj-0b812a260/" },
    { name: "Anvesh Vohra", role: "Feynatic", img: "/images/anvesh.jpeg", linkedin: "https://www.linkedin.com/in/anvesh-vohra-74378516b" },
    { name: "Spandan Mishra", role: "Feynatic", img: "/images/spandan.jpeg", linkedin: "https://www.linkedin.com/in/spandan-mishra-432a9b332" },
    { name: "Kaushik Karma", role: "Feynatic", img: "/images/kaushik.png", linkedin: "https://www.linkedin.com/in/kaushik-karma/" },
    { name: "Srinandan Daparthi", role: "Feynatic", img: "/images/Srinandan.jpeg", linkedin: "https://www.linkedin.com/in/srinandan-daparthi" },
    { name: "Rutwek Reddy Lella", role: "Feynatic", img: "/images/rutwek.jpeg", linkedin: "hhttps://www.linkedin.com/in/lella-rutwek-reddy-605532395" }
  ];

  const alumni = [
    { name: "Anshul Rath", role: "Feynatics Zenithite", img: "/images/Anshul Rath.jpg", linkedin: "http://linkedin.com/in/anshul-rath-1319042a5" },
    { name: "Mandar Kirkire", role: "Feynatics Zenithite", img: "/images/Mandar Kirkire.jpg", linkedin: "http://linkedin.com/in/mandar-kirkire-00594a286" },
    { name: "Aaditya Rajput", role: "Feynatics Zenithite", img: "/images/Aaditya Rajput_edited.jpg", linkedin: "http://linkedin.com/in/aaditya-rajput-085980312" },
    { name: "Pranav Reddy Thota", role: "Feynatics Zenithite", img: "/images/PranavThota.jpg", linkedin: "http://linkedin.com/in/pranav-reddy-thota-244b22267" },
    { name: "Rithul Poojary", role: "Feynatics Zenithite", img: "/images/Rithul.jpg", linkedin: "http://linkedin.com/in/rithul-poojary-b58501290" },
    { name: "Rajas Bamb", role: "Feynatics Zenithite", img: "/images/Rajas Bamb.jpeg", linkedin: "http://linkedin.com/in/rajas-bamb-5140961a8" },
    { name: "A Vinil", role: "Feynatics Zenithite", img: "/images/Vinil.jpg", linkedin: "http://linkedin.com/in/a-vinil-140a18271" },
    { name: "Aditya Mahajan", role: "Feynatics Zenithite", img: "/images/Aditya Mahajan_edited.jpg", linkedin: "http://linkedin.com/in/adityamahajan16" },
    { name: "Shobhit Jha", role: "Feynatics Zenithite", img: "/images/Shobhit Jha_edited.jpg", linkedin: "http://linkedin.com/in/shobhit-jha-2b7b11250" },
    { name: "Vishwas Vedantham", role: "Feynatics Zenithite", img: "/images/Vishwas Vedantham_edited.jpg", linkedin: "http://linkedin.com/in/vishwas-vedantham-a1368b252" }
  ];

  return (
    <section id="members" className="section-padding members-section">
      <div className="container">

        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Members</h2>
        </div>

        <div className="members-grid border-top">
          {currentMembers.map((member, index) => (
            <motion.div
              className="member-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <div className="member-img-wrapper">
                <img src={member.img} alt={member.name} />
                <div className="img-overlay">
                  <a href={member.linkedin} target="_blank" rel="noreferrer" className="btn-minimal">
                    LINKEDIN ↗
                  </a>
                </div>
              </div>
              <div className="member-info">
                <span className="mono text-muted">{(index + 1).toString().padStart(2, '0')}</span>
                <h3>{member.name}</h3>
                <p className="text-muted">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="section-header alumni-header" data-aos="fade-up">
          <h2 className="section-title">Graduates</h2>
        </div>

        <div className="members-grid border-top">
          {alumni.map((member, index) => (
            <motion.div
              className="member-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <div className="member-img-wrapper">
                <img src={member.img} alt={member.name} />
                <div className="img-overlay">
                  <a href={member.linkedin} target="_blank" rel="noreferrer" className="btn-minimal">
                    LINKEDIN ↗
                  </a>
                </div>
              </div>
              <div className="member-info">
                <span className="mono text-muted">{(index + 1).toString().padStart(2, '0')}</span>
                <h3>{member.name}</h3>
                <p className="text-muted">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Members;

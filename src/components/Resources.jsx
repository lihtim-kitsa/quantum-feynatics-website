import React from 'react';
import './Resources.css';

const Resources = () => {
  const resources = [
    { title: "Qiskit Textbook", desc: "A university-grade digital textbook for quantum computing.", link: "https://qiskit.org/textbook/" },
    { title: "Nielsen & Chuang", desc: "Quantum Computation and Quantum Information.", link: "#" },
    { title: "IBM Quantum Lab", desc: "Run your quantum experiments on real hardware.", link: "https://quantum-computing.ibm.com/" },
    { title: "Qiskit Advocate Program", desc: "Join the community of quantum enthusiasts.", link: "https://qiskit.org/advocates/" }
  ];

  return (
    <section className="section-padding resources-section">
      <div className="container">
        
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Resources</h2>
        </div>

        <div className="resources-list border-top">
          {resources.map((res, index) => (
            <div className="resource-item border-bottom" key={index} data-aos="fade-up">
              <div className="res-content">
                <h3>{res.title}</h3>
                <p className="text-muted">{res.desc}</p>
              </div>
              <a href={res.link} target="_blank" rel="noreferrer" className="btn-minimal">
                ACCESS ↗
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Resources;

import React from "react";
import certificateData from "../../data/certificates.json"; // adjust path if needed

const Certificates = () => {
  return (
    <section id="certificate" className="certificates-section">
      <h2 className="section-title">Certifications</h2>

      <div className="certificates-grid">
        {certificateData.map((cert, key) => (
          <>
          <div key={key} className="certificate-card">
            <img
              src={cert.image}
              alt={cert.title}
              className="certificate-image"
            />
            <h3 className="certificate-title">{cert.title}</h3>
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="certificate-link"
            >
              View Certification
            </a>
          </div>
</>

))}
      </div>
    </section>
  );
};

export default Certificates;

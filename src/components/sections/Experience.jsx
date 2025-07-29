import React from "react";
import experienceData from "../../data/experience.json";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3 className="experience-role">{exp.role}</h3>
            <p className="experience-company">
              {exp.company} &nbsp;|&nbsp; {exp.location}
            </p>
            <p className="experience-duration">
              {exp.from} – {exp.to}
            </p>
            <ul className="experience-description">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="experience-tech">
              {exp.techStack.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

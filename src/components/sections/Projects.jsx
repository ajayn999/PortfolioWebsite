import React from "react";
import projectData from "../../data/projects.json";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tools">
              {project.tools.map((tool, i) => (
                <span key={i} className="tool-tag">
                  {tool}
                </span>
              ))}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

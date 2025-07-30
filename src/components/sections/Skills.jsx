import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaSass,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaWindows,
  FaNodeJs,
  FaNpm,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiJira,
  SiLaravel,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { MdOutlineCheckCircle } from "react-icons/md";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-wrapper">
        {/* Left Side – Image */}
        <div className="skills-image">
          <img src="./mern.png" alt="Skills" className="profile-image" />
        </div>

        {/* Right Side – Skill Content */}
        <div className="skills-content">
          <h2 className="section-title">Skills</h2>
          <h3 className="skills-subtitle">Programming Languages & Tools</h3>

          <div className="skills-flex-row">
            {/* Frontend */}
            <div className="skills-category">
              <h4>Frontend</h4>
              <ul>
                <li className="skill-box">
                  <FaHtml5 /> HTML5
                </li>
                <li className="skill-box">
                  <FaCss3Alt /> CSS3
                </li>
                <li className="skill-box">
                  <FaJsSquare /> JavaScript (ES6+)
                </li>
                <li className="skill-box">
                  <FaReact /> React.js
                </li>
                <li className="skill-box">
                  <SiNextdotjs /> Next.js
                </li>
                <li className="skill-box">
                  <SiRedux /> Redux
                </li>
                <li className="skill-box">
                  <SiTailwindcss /> Tailwind CSS
                </li>
                <li className="skill-box">
                  <FaBootstrap /> Bootstrap
                </li>
                <li className="skill-box">
                  <SiTypescript /> TypeScript
                </li>
                <li className="skill-box">
                  <FaSass /> SASS
                </li>
                <li className="skill-box">
                  <SiJira /> Jira
                </li>
              </ul>
            </div>

            {/* Backend */}
            <div className="skills-category">
              <h4>Backend</h4>
              <ul>
                <li className="skill-box">
                  <FaNodeJs /> Node.js
                </li>
                <li className="skill-box">
                  <SiExpress /> Express.js
                </li>
                <li className="skill-box">
                  <SiMongodb /> MongoDB
                </li>
                <li className="skill-box">
                  <SiLaravel /> Laravel
                </li>
                <li className="skill-box">
                  <FaNpm /> NPM
                </li>
                <li className="skill-box">
                  <FaGitAlt /> Git
                </li>
                <li className="skill-box">
                  <FaGithub /> GitHub
                </li>
                <li className="skill-box">
                  <FaLinux /> Linux
                </li>
                <li className="skill-box">
                  <FaWindows /> Windows
                </li>
                <li className="skill-box">
                  <DiVisualstudio /> VS Code
                </li>
              </ul>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skills-category">
            <h4>Soft Skills</h4>
            <ul>
              <li className="skill-box">
                <MdOutlineCheckCircle /> Critical thinking & Creativity
              </li>
              <li className="skill-box">
                <MdOutlineCheckCircle /> Project management
              </li>
              <li className="skill-box">
                <MdOutlineCheckCircle /> Decision-making
              </li>
              <li className="skill-box">
                <MdOutlineCheckCircle /> Conflict resolution & Proactivity
              </li>
              <li className="skill-box">
                <MdOutlineCheckCircle /> Teamwork & Leadership
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

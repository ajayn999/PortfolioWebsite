// src/components/Navbar.jsx
import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaCertificate,
  FaBriefcase,
  FaEnvelope,
  FaBars,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaSkype,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="mobile-header">
        <img
          src="./assets/sideProfile.jpg"
          alt="Profile"
          width={40}
          height={40}
          style={{ borderRadius: "10px" }}
          className="mobile-profile"
        />
        <FaBars onClick={() => setMenuOpen(!menuOpen)} className="hamburger" />
      </div>

      {/* Full Sidebar / Mini Mobile Nav */}
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <div className="profile-section">
            <img
              src="./assets/sideProfile.jpg"
              alt="Profile"
              className="profile-img"
              width={100}
              height={100}
              style={{ borderRadius: "10px" }}
            />
            <h2 className="profile-name">Ajay Parihar</h2>
            <div className="social-icons">
              <a
                href="https://github.com/ajayn999"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a href="https://skype.com/" target="_blank" rel="noreferrer">
                <FaSkype />
              </a>
              <a
                href="https://www.linkedin.com/in/mr-ajay-pariharn"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/ajaypariharn"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <ul className="nav-links">
            <li>
              <a href="#home" onClick={(e) => handleSmoothScroll(e, "home")}>
                <FaHome className="icon" /> Home
              </a>
            </li>
            <li>
              <a
                href="#aboutme"
                onClick={(e) => handleSmoothScroll(e, "aboutme")}
              >
                <FaUser className="icon" /> About Me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => handleSmoothScroll(e, "skills")}
              >
                <FaTools className="icon" /> Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, "projects")}
              >
                <FaProjectDiagram className="icon" /> Projects
              </a>
            </li>
            <li>
              <a
                href="#certificate"
                onClick={(e) => handleSmoothScroll(e, "certificate")}
              >
                <FaCertificate className="icon" /> Certificates
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => handleSmoothScroll(e, "experience")}
              >
                <FaBriefcase className="icon" /> Experience
              </a>
            </li>
            <li>
              <a
                href="#contactme"
                onClick={(e) => handleSmoothScroll(e, "contactme")}
              >
                <FaEnvelope className="icon" /> Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

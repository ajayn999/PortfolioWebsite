import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

import { CgProfile } from "react-icons/cg";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm AJAY PARIHAR</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              Frontend Developer
            </span>{" "}
            <br />
          </h1>
          <p className="hero--section-description">
            Experienced Frontend Developer with a strong proficiency in ReactJS,
            dedicated to designing and developing engaging user interfaces. With
            a solid foundation in HTML, CSS, and JavaScript, ReactJS. My ability
            to create dynamic and user-centric applications using the ReactJS
            framework.
          </p>
          <a
            style={{ marginTop: "20px" }}
            className="btn btn-primary"
            href="https://drive.google.com/file/d/1kqUIw40Dq4q4T-2i-Xs80sTazmiDXBN3/view"
            target="_blank"
            rel="noreferrer"
          >
            RESUME
          </a>
          <div id="icon">
            <h1>
              <a
                style={{ color: "black" }}
                href="https://github.com/ajayn999"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </h1>
            <h1>
              <a
                style={{ color: "black" }}
                href="https://www.linkedin.com/in/mr-ajay-pariharn/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </h1>
            <h1>
              <a
                style={{ color: "black" }}
                href="https://www.crio.do/learn/portfolio/ajaypariharn/"
                target="_blank"
                rel="noreferrer"
              >
                <CgProfile />
              </a>
            </h1>
            <h1>
              <a
                style={{ color: "black" }}
                href="https://instagram.com/ajaypariharn?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D "
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
            </h1>
          </div>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./image/hero_img.webp" alt="Hero Section" />
      </div>
    </section>
  );
}

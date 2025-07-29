import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import AboutMe from "./components/sections/AboutMe";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Certificates from "./components/sections/Certificates";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <section id="home">
          <Home />
        </section>
        <section id="aboutme">
          <AboutMe />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certificate">
          <Certificates />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contactme">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;

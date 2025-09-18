import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const titleRef = useRef();
  const subtitleRef = useRef();
  const paraRef = useRef();
  const imageRef = useRef();
  const ctx = useRef();

  useLayoutEffect(() => {
    ctx.current = gsap.context(() => {
      gsap.from(titleRef.current, { opacity: 0, y: -50, duration: 1 });
      gsap.from(subtitleRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.5,
      });
      gsap.from(paraRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 1,
      });

      // Image animation
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        rotateY: 20,
        duration: 1.2,
        ease: "power3.out",
        delay: 1.5,
      });

      // Floating effect
      gsap.to(imageRef.current, {
        y: -12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 2.5,
        delay: 2.7,
      });
    });

    return () => ctx.current.revert();
  }, []);

  return (
    <div className="home-wrapper">
      <div className="home-container">
        <h1 ref={titleRef} className="home-title">
          AJAY Parihar
        </h1>

        <h2 ref={subtitleRef} className="home-subtitle">
          Hi.. I'm{" "}
          <span className="animated-role">
            <Typewriter
              words={[
                "Coder",
                "ReactJS Developer",
                "JavaScript Developer",
                "NextJS Developer",
                "NodeJS Developer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <p ref={paraRef} className="home-description">
        Senior Frontend Developer passionate about building scalable, responsive, and user-focused web applications. Proficient in modern frontend technologies like React.js, Next.js, Redux, JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS. Skilled in crafting clean, reusable components, implementing MVC architecture, and optimizing UI performance.

<br/>Beyond frontend, I also bring experience with backend development using Node.js and Express.js—creating RESTful APIs and implementing secure authentication (JWT, OAuth, CSRF protection). Comfortable working with MongoDB in full-stack environments, I enjoy turning ideas into seamless digital experiences.
       </p>
      </div>

      <div className="home-image">
        <img
          ref={imageRef}
          src="./assets/sideProfile.jpg"
          alt="Ajay Parihar"
          className="profile-image"
        />
      </div>
    </div>
  );
}

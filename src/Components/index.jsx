import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import HeroSection from "../Components/HeroSection";
import MyPortfolio from "./MyPortfolio";
import MySkills from "../Components/MySkills";
// import Testimonial from "./Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <MyPortfolio />
      <AboutMe />
      {/* <Testimonial /> */}
      <ContactMe />
      <Footer />
    </>
  );
}

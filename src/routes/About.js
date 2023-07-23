import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImage from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        HeroImg={AboutImage}
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImage from "../assets/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        HeroImg={AboutImage}
        title="Your Journey Your Story"
        text="Your Favourite Destination"
        url="/"
        btnClass="show"
        btntxt="Travel Plan"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;

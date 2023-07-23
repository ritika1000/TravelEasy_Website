import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImage from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact() {
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
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;

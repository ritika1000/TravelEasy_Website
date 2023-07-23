import "./ContactFormStyle.css";
function ContactForm() {
  return (
    <div className="form-cont">
      <h1>Send A Message To Us.</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>SEND MESSAGE</button>
      </form>
    </div>
  );
}
export default ContactForm;

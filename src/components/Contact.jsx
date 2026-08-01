import emailIcon from "../assets/email.png";


export default function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={emailIcon}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:kadekgirendra@gmail.com">kadekgirendra@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}

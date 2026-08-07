import profilePic from "../assets/profile-pic.png";
import githubIcon from "../assets/github.png";
import instagramIcon from "../assets/instagram.png";
import { useEffect, useState } from "react";

export default function Profile() {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReveal(true), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="profile">
      <div className={`section__pic-container profile-reveal ${reveal ? "profile-reveal-visible" : ""}`}>
        <img src={profilePic} alt="Kadek Girendra Profile Picture" />
      </div>
      <div className={`section__text profile-reveal profile-reveal-text ${reveal ? "profile-reveal-visible" : ""}`}>
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Giren</h1>
        <p className="section__text__p2">Web Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open("/public/CV_giren.pdf", "_blank")}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={instagramIcon}
            alt="My instagram profile"
            className="icon"
            onClick={() =>
              (window.location.href = "https://instagram.com/kadekgirendra/")
            }
          />
          <img
            src={githubIcon}
            alt="My Github profile"
            className="icon"
            onClick={() =>
              (window.location.href = "https://github.com/kadekgirendra/")
            }
          />
        </div>
      </div>
    </section>
  );
}

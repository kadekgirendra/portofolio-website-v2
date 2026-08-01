import aboutPic from "../assets/about-pic.png";
import experienceIcon from "../assets/experience.png";
import educationIcon from "../assets/education.png";
import arrowIcon from "../assets/arrow.png";

export default function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={aboutPic} alt="Profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={experienceIcon}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>
                2+ years <br />
                Web Development
              </p>
            </div>
            <div className="details-container">
              <img src={educationIcon} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>
                SMA Negeri 1 Ubud
                <br />
               Institut Bisnis dan Teknologi Indonesia 
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              As a Data and Information Management student, I am passionate about technology and software development. My interests include web development, database management, data analytics, and machine learning. I have handson experience developing web applications using Laravel, JavaScript, and MySQL, and I am committed to continuously expanding my knowledge and contributing to innovative technology projects.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#experience")}
      />
    </section>
  );
}

import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import arrowIcon from "../assets/arrow.png";
import useInView from "../hooks/useInView";

const projects = [
  { title: "SiPinjam INSTIKI", image: project1, github: "https://github.com/kadekgirendra/instiki-peminjaman-barang", demo: "https://github.com/" },
  { title: "Ari Futsal", image: project2, github: "https://github.com/Yordi16/futsal", demo: "https://arifutsal.my.id/login" },
  { title: "Portofolio V1", image: project3, github: "https://github.com/kadekgirendra/portofolio-website", demo: "https://jackdellvion.vercel.app/" },
];

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" ref={ref} className={`fade-section ${inView ? "fade-in-visible" : ""}`}>
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project) => (
            <div className="details-container color-container" key={project.title}>
              <div className="article-container">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">
                {project.title}
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = project.github)}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = project.demo)}
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#contact")}
      />
    </section>
  );
}


import arrowIcon from "../assets/arrow.png";
import useInView from "../hooks/useInView";

const frontendSkills = [
  { name: "HTML", level: "Markup", icon: "html" },
  { name: "CSS", level: "Styling", icon: "css" },
  { name: "JavaScript", level: "Interaction", icon: "js" },
  { name: "Tailwind CSS", level: "Styling", icon: "tailwind" },
  { name: "Figma", level: "UI/UX Design", icon: "figma" },
  { name: "React", level: "Framework", icon: "react" },
];

const backendSkills = [
  { name: "PHP", level: "Server-side Scripting", icon: "php" },
  { name: "Laravel", level: "Web Framework", icon: "laravel" },
  { name: "MySQL", level: "Database", icon: "mysql" },
  { name: "Python", level: "Scripting", icon: "py" },
  { name: "Git", level: "Version Control", icon: "git" },
  { name: "Node.js", level: "Runtime Environment", icon: "nodejs" },
];

function iconUrl(id) {
  return `https://skillicons.dev/icons?i=${id}&theme=light`;
}



function SkillGrid({ title, skills, delay = 0 }) {
  const [ref, inView] = useInView();

  return (
    <div className="skills-group">
      <h2 className="experience-sub-title">{title}</h2>
      <div
        ref={ref}
        className={`skills-box ${inView ? "in-view" : ""}`}
        style={{ animationDelay: `${delay}ms` }}
        data-count={skills.length}
      >
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-card__icon-box">
                <img src={iconUrl(skill.icon)} alt={`${skill.name} logo`} />
              </div>
              <div className="skill-card__text">
                <h3>{skill.name}</h3>
                <p>{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView();
  return (
    <section id="experience" ref={ref} className={`fade-section ${inView ? "fade-in-visible" : ""}`}>
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience Tools</h1>
      <div className="experience-details-container">
        <SkillGrid title="Frontend Development" skills={frontendSkills} delay={0} />
        <SkillGrid title="Backend Development" skills={backendSkills} delay={200} />
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#projects")}
      />
    </section>
  );
}
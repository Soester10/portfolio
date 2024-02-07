import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJs,
  faReact,
  faWindows,
  faLinux,
  faGitAlt,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import { faBolt, faDatabase } from "@fortawesome/free-solid-svg-icons";
import langLogo from "../assets/langLogo.jpeg";
import toolsLogo from "../assets/toolLogo.jpeg";
import dbLogo from "../assets/dbLogo.jpeg";
import platformLogo from "../assets/platformLogo.jpeg";

const Skills = () => {
  const skillsets = [
    {
      title: "Laguages",
      logo: langLogo,
      skills: [
        {
          name: "Python",
          icon: faPython,
        },
        {
          name: "JavaScript",
          icon: faJs,
        },
        {
          name: "MATLAB",
          icon: "",
        },
        {
          name: "C++",
          icon: "",
        },
      ],
    },
    {
      title: "Tools & Frameworks",
      logo: toolsLogo,
      skills: [
        {
          name: "Django",
          icon: "",
        },
        {
          name: "Flask",
          icon: "",
        },
        {
          name: "React",
          icon: faReact,
        },
        {
          name: "PySpark",
          icon: "",
        },
        {
          name: "PyTorch",
          icon: "",
        },
        {
          name: "TensorFlow",
          icon: "",
        },
        {
          name: "Git",
          icon: faGitAlt,
        },
        {
          name: "FastAPI",
          icon: faBolt,
        },
        {
          name: "PyGame",
          icon: "",
        },
      ],
    },

    {
      title: "Databases",
      logo: dbLogo,
      skills: [
        {
          name: "SQL",
          icon: faDatabase,
        },
        {
          name: "PostgreSQL",
          icon: "",
        },
      ],
    },

    {
      title: "Platforms",
      logo: platformLogo,
      skills: [
        {
          name: "Windows",
          icon: faWindows,
        },
        {
          name: "Linux",
          icon: faLinux,
        },
        {
          name: "AWS",
          icon: faAws,
        },
        {
          name: "GCP",
          icon: "",
        },
      ],
    },
  ];

  const hasIcon = (skill: any) => {
    return skill.icon ? <FontAwesomeIcon icon={skill.icon} /> : null;
  };

  return (
    <div className="mc3">
      <section id="skills" className="container ff">
        <h2 className="text-center section-heading mb-4">Skills</h2>

        {skillsets.map((skillset, index) => (
          <div className="skill-timeline-item" key={index}>
            <div className="school-logo">
              <img
                src={skillset.logo}
                alt={skillset.title}
                title={skillset.title}
              />
            </div>
            <div className="skill-card">
              <ul className="skills-list" style={{ marginBottom: 0 }}>
                {skillset.skills.map((skill, index) => (
                  <li key={index}>
                    {skill.name} {hasIcon(skill)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Skills;

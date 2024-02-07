import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import srmLogo from "../assets/srmLogo.jpeg";
import nyuLogo from "../assets/nyuLogo.jpeg";
import {
  faBowlFood,
  faDumbbell,
  faFutbol,
  faGamepad,
  faLaptopCode,
  faMountainSun,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const aboutMe = () => {
    return (
      <p>
        Hi! I’m a code-wielding fitness {<FontAwesomeIcon icon={faDumbbell} />}{" "}
        guru who's as adept at debugging software{" "}
        {<FontAwesomeIcon icon={faLaptopCode} />} as I am at mastering the
        perfect pull-up. With a penchant for gaming{" "}
        {<FontAwesomeIcon icon={faGamepad} />} and a knack for crafting culinary
        delights {<FontAwesomeIcon icon={faBowlFood} />} between coding
        sessions, I’m the ultimate multitasker. When I’m not busy fixing my
        buggy code or dominating my brother in Fifa{" "}
        {<FontAwesomeIcon icon={faFutbol} />}, you'll likely find me hitting the
        trails for a scenic trek {<FontAwesomeIcon icon={faMountainSun} />} or
        jamming out to my favorite tunes {<FontAwesomeIcon icon={faMusic} />}{" "}
        while breaking a sweat. With a love and passion for exploration, I’m
        always eager to tackle new challenges and learn new skills—whether it's
        conquering a new programming language or perfecting my handstand form.
        In my world, every bug fix is a victory, and every new calisthenics
        skill mastered is cause for celebration!
      </p>
    );
  };
  const education = [
    {
      school: "New York University",
      degree: "Masters",
      major: "Computer Engineering",
      color: "#e5e9fe",
      logo: nyuLogo,
      time: "2022 - 2024",
    },
    {
      school: "SRM University",
      degree: "Bachelors",
      major: "Computer Science and Engineering",
      color: "#e5e9fe",
      logo: srmLogo,
      time: "2017 - 2021",
    },
  ];

  return (
    <div className="mc2">
      <section id="about" className="container ff">
        <div className="row">
          <div className="col-md-6">
            <h2 className="section-heading" style={{ textAlign: "center" }}>
              About Me
            </h2>
            <p style={{ fontFamily: "Courier New", fontSize: 19 }}>
              {aboutMe()}
            </p>
          </div>
          <div className="col-md-6">
            <h2 className="section-heading" style={{ textAlign: "center" }}>
              Education
            </h2>
            <div className="timeline">
              {education.map((ed, index) => (
                <div className="timeline-item" key={index}>
                  <div className="school-logo">
                    <img src={ed.logo} alt={ed.school} />
                  </div>
                  <div
                    className="education-card"
                    style={{ backgroundColor: ed.color }}
                  >
                    <h4 style={{ fontFamily: "Gill Sans", fontSize: 24 }}>
                      {ed.school}
                    </h4>
                    <p style={{ fontFamily: "Didot", fontSize: 15 }}>
                      {ed.time}
                    </p>
                    <p style={{ fontFamily: "Monaco", fontSize: 15.5 }}>
                      {ed.degree} in {ed.major}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

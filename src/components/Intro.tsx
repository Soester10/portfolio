import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import profilePicture from "../assets/profilePicture.jpeg";

const Intro = () => {
  let style = { color: "#343a40" };
  let fstyle = { color: "#4e5760" };
  let lstyle = { color: "#727f8c" };

  const fname = "Hariharan";
  const lname = "Nagasubramaniam";
  const title = "Grad Student at NYU";

  const socials = [
    {
      // Mail
      icon: faEnvelope,
      link: "mailto:hnnhariharan12@gmail.com?subject=Hey%20There!",
    },
    {
      // LinkedIn
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/hariharan-naga/",
    },
    {
      // GitHub
      icon: faGithub,
      link: "https://github.com/Soester10",
    },
    {
      // Instagram
      icon: faInstagram,
      link: "https://www.instagram.com/hari4257/",
    },
    {
      // Twitter
      icon: faTwitter,
      link: "https://twitter.com/Hari103742",
    },
  ];

  return (
    <div className="mc1">
      <div className="jumbotron">
        <img
          src={profilePicture}
          alt="Profile Picture"
          className="profile-img"
        ></img>
        <h1 className="display-4" style={fstyle}>
          {fname}
        </h1>{" "}
        <h1 className="display-4" style={lstyle}>
          {" "}
          {lname}
        </h1>
        <p className="lead" style={style}>
          {title}
        </p>
        <div className="social-icons">
          {socials.map((social, index) => (
            <a href={social.link} key={index} target="_blank">
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;

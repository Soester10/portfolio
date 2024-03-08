import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogleScholar } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import sohLogo from "../assets/sohLogo.svg";
import brvitLogo from "../assets/brvitLogo.png";
import firechatLogo from "../assets/firechatLogo.jpeg";
import snakipyLogo from "../assets/snakipyLogo.jpeg";
import vitLogo from "../assets/vitLogo.jpeg";
import upsampLogo from "../assets/upsampLogo.jpeg";

const Projects = () => {
  const sohDesc = () => {
    return (
      <p>
        a dynamic social app engineered to ignite vibrant user engagement and
        meaningful connections. Our platform redefines interaction with
        innovative features like polling, live discussions, and seamless friend
        connections, captivating over 500 active users. With a robust chat
        system fueled by Redis Cache memory, we've slashed latency by 50%,
        ensuring secure and swift communication for both individual chats and
        group discussions. Harnessing Ajax techniques, we've revolutionized
        content updates, delivering a seamless user experience with a remarkable
        30% boost in performance. Our streamlined deployment process via AWS
        Elastic Beanstalk and Travis guarantees swift access, while PostgreSQL
        efficiently manages user profiles and interaction history, enhancing
        user satisfaction.
      </p>
    );
  };

  const brvitDesc = () => {
    return (
      <p>
        A State-of-the-art Vision Transformer model tailored for Bokeh Built
        upon the esteemed DPT model, our solution seamlessly integrates advanced
        encoder, reassembly, and fusion layers, delivering extraordinary
        results. By eliminating the need for a separate depth estimation model,
        we've streamlined computation and drastically reduced processing time,
        achieving an impressive 18% enhancement in subject clarity. With
        state-of-the-art performance validated on the challenging EBB! Dataset,
        boasting a remarkable 1.32% improvement in the SSIM metric, our Vision
        Transformer sets a new standard in image processing technology, ushering
        in unparalleled clarity and precision.
      </p>
    );
  };

  const firchatDesc = () => {
    return (
      <p>
        An immersive platform tailored exclusively for passionate movie
        aficionados. Our innovative design features private rooms curated with
        comprehensive movie details sourced directly from the OMDB API,
        empowering users to network, share reviews, and indulge in one-on-one
        conversations. Leveraging Firestore's NoSQL structure, we've achieved a
        significant 2x improvement in read operations speed, ensuring swift
        access to information. With enhanced data security measures and
        real-time chat capabilities facilitated by Cloud Firestore Storage and
        Firebase Security Functions, we guarantee a safe and engaging experience
        for every user.
      </p>
    );
  };

  const snakipyDesc = () => {
    return (
      <p>
        A timeless classic revamped for the digital age: the Snake Game app.
        Players dive into nostalgia as they navigate a pixelated world, guiding
        their hungry reptile to devour tasty treats and grow longer with each
        successful bite. With intuitive controls and vibrant visuals, users are
        immersed in a thrilling arcade experience. As the snake grows, so does
        the challenge, with increasing speed. Whether reliving childhood
        memories or discovering the excitement for the first time, this Snake
        Game app promises endless hours of addictive fun for players of all
        ages.
      </p>
    );
  };

  const vitDesc = () => {
    return (
      <p>
        A Vision Transformer model snippet for modern image processing.
        Leveraging attention mechanisms, it efficiently captures both local and
        global features, paving the way for enhanced performance in various
        computer vision tasks.
      </p>
    );
  };

  const upsampDesc = () => {
    return (
      <p>
        Upsampling techniques in Natural Language Processing (NLP) to tackle
        imbalanced datasets effectively. By employing up-sampling techniques on
        minority classes, it ensures balanced representation, enhancing the
        model's ability to learn from all data points. This approach promotes
        fairness and accuracy in NLP tasks, empowering models to make more
        informed predictions across diverse classes
      </p>
    );
  };

  const projects = [
    {
      name: "Show of Hands",
      desc: sohDesc(),
      image: sohLogo,
      link: "https://github.com/Soester10/ShowOfHands",
    },
    {
      name: "BRVit",
      desc: brvitDesc(),
      image: brvitLogo,
      link: "https://github.com/Soester10/Bokeh-Rendering-with-Vision-Transformers",
      paper: "https://www.techrxiv.org/doi/full/10.36227/techrxiv.17714849.v1",
    },
    {
      name: "FireChat",
      desc: firchatDesc(),
      image: firechatLogo,
      link: "https://github.com/Soester10/FireChat",
    },
    {
      name: "SnakiPy",
      desc: snakipyDesc(),
      image: snakipyLogo,
      link: "https://github.com/Soester10/Snakipy",
    },
    {
      name: "Vision Transformer",
      desc: vitDesc(),
      image: vitLogo,
      link: "https://github.com/Soester10/Vision-Trasformer",
    },
    {
      name: "UpSampler",
      desc: upsampDesc(),
      image: upsampLogo,
      link: "https://github.com/Soester10/Minority-Class-Upsampler-for-NLP",
    },
  ];

  const printLogo = (logo: IconDefinition, link: string, text: string) => {
    return (
      <a
        href={link}
        className="portfolio-link"
        target="_blank"
        rel="noopener noreferrer"
        title={text}
      >
        <FontAwesomeIcon
          icon={logo}
          style={{ width: 25, height: 25 }}
          className="hov"
        />
      </a>
    );
  };

  const hasPaper = (project: any) => {
    return project.paper
      ? printLogo(faGoogleScholar, project.paper, "Research Paper")
      : null;
  };

  const hasPage = (project: any) => {
    return project.page ? printLogo(faGlobe, project.page, "Webpage") : null;
  };

  return (
    <div className="mc5">
      <section id="portfolio" className="container ff">
        <h2 className="text-center section-heading mb-4">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 portfolio-item" key={index}>
              <div
                className="card portfolio-card"
                style={{ border: "none", paddingTop: "20px" }}
              >
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.name}
                  title={project.name}
                ></img>
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ fontFamily: "Gill Sans", fontSize: 24 }}
                  >
                    {project.name}
                  </h5>
                  <p
                    className="card-text"
                    style={{ fontFamily: "Monaco", fontSize: 15.5 }}
                  >
                    {project.desc}
                  </p>
                  {printLogo(faGithub, project.link, "GitHub Page")}
                  {hasPaper(project)}
                  {hasPage(project)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;

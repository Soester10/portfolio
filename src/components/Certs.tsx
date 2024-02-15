import googleITLogo from "../assets/googleITLogo.png";
import azureLogo from "../assets/azureLogo.png";
import courseraLogo from "../assets/courseraLogo.png";

const Certs = () => {
  const certs = [
    {
      name: "Google IT Automation Certificate",
      image: googleITLogo,
      time: "June 2021",
      link: "https://www.credly.com/badges/0ef2c6e8-a779-4af8-b971-e579b571aa27/public_url",
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      image: azureLogo,
      time: "May 2021",
      link: "https://www.credly.com/badges/23a52a73-4ef4-4fe2-b26f-3db32fd7cbee/public_url",
    },
    {
      name: "DeepLearning.AI TensorFlow Developer Specialization",
      image: courseraLogo,
      time: "September 2020",
      link: "https://coursera.org/share/7dbb2f72a59d9161f91512d42f694d87",
    },
    {
      name: "Machine Learning",
      image: courseraLogo,
      time: "September 2020",
      link: "https://coursera.org/share/75b30c10d0b914d39cc306cf71968a04",
    },
  ];
  return (
    <div className="mc6">
      <section id="portfolio" className="container ff">
        <h2 className="text-center section-heading mb-4">Certifications</h2>
        {certs.map((cert, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="d-flex align-items-center">
              {" "}
              <div className="cert-logo mr-3">
                {" "}
                <a href={cert.link}>
                  <img src={cert.image} alt={cert.name} title={cert.name} />
                </a>
              </div>
              <div>
                <p style={{ fontFamily: "Gill Sans", fontSize: 24 }}>
                  {cert.name}
                </p>
                <p style={{ fontFamily: "Didot", fontSize: 15 }}>{cert.time}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Certs;

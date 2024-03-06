import nyuLogo from "../assets/nyuLogo.jpeg";
import dnbLogo from "../assets/dnbLogo.png";

const Experiences = () => {
  const raDesc = () => {
    return (
      <p>
        &#8608; In my role as a Research Assistant at New York University's
        Secure Systems Lab, I delve into the intricate world of software bugs
        and issues, exploring the concept of 'atoms of confusion' across various
        sources. Utilizing advanced techniques, I generate Abstract Syntax Trees
        for diverse codebases, empowering comprehensive analysis of code
        structure and logic flow.
        <br></br>
        <br></br>
        &#8608; Leveraging static code analysis tools like CodeQL, I've
        significantly enhanced classification processes, achieving an impressive
        500% speed improvement over previous implementations. Additionally, I
        actively contribute to the refinement of existing classifiers in Clojure
        through the integration of new features via CodeQL queries and
        predicates.
        <br></br>
        <br></br>
        &#8608; My work extends to conducting thorough statistical analyses
        across multiple repositories and programming languages, employing a
        combination of Clojure and CodeQL implementations to extract insights
        from repositories such as Git, Emacs, and Linux, and languages like C
        and C++.
      </p>
    );
  };

  const taDesc = () => {
    return (
      <p>
        &#8608; As a Teaching Assistant for the GY-CS6063 Software Engineering
        course at NYU, I have the privilege of working alongside Professor
        Gennadiy Civil to facilitate an engaging learning experience for
        students.
        <br></br>
        <br></br>
        &#8608; Weekly, I provide invaluable assistance to students, offering
        guidance on fundamental software engineering principles and concepts.
        Beyond the classroom, I take on the responsibility of managing the class
        GitHub repositories, ensuring seamless collaboration and effective
        version control.
        <br></br>
        <br></br>
        &#8608;Additionally, I play a pivotal role in supporting students with
        their assignments, application deployments, and debugging tasks,
        fostering their growth and success in the field of software engineering.
      </p>
    );
  };

  const dsDesc = () => {
    return (
      <p>
        &#8608; In my tenure at Dun & Bradstreet, I spearheaded various
        initiatives aimed at optimizing data extraction and processing
        workflows. One significant accomplishment involved developing and
        scaling multiprocessing web crawlers, which automated the extraction of
        ESG-relevant data for a staggering 2.5 million companies, constituting
        over 60% of the company's internet-based data.
        <br></br>
        <br></br>
        &#8608; Additionally, I played a pivotal role in enhancing efficiency
        within PySpark workflows by introducing a single, highly efficient User
        Defined Function (UDF), resulting in a remarkable 30% increase in Reason
        Code production speed, coupled with refined logic.
        <br></br>
        <br></br>
        &#8608; Furthermore, I engineered an end-to-end NLP pipeline tailored
        for extracting pertinent data from ESG reports and news for more than
        200k companies across 15 global markets. Leveraging the SIC (Standard
        Industrial Classification) method, I seamlessly integrated it into
        production code to shortlist over 5 million businesses engaged in
        controversial activities.
        <br></br>
        <br></br>
        &#8608; Moreover, I developed multiple efficient UDFs to compile
        Self-Assessment Questionnaires from individual companies, effectively
        managing over 50% of new data sources for scoring conversion.
      </p>
    );
  };

  const experiences = [
    {
      name: "New York University",
      pos: "Research Assistant",
      time: "Jun 23 - Present",
      desc: raDesc(),
      image: nyuLogo,
    },
    {
      name: "New York University",
      pos: "Teaching Assistant",
      time: "Aug 23 - Present",
      desc: taDesc(),
      image: nyuLogo,
    },
    {
      name: "Dun & Bradstreet",
      pos: "Data Scientist",
      time: "Aug 21 - Jul 22",
      desc: dsDesc(),
      image: dnbLogo,
    },
  ];

  return (
    <div className="mc4">
      <div className="container ff">
        <h2 className="text-center section-heading mb-4">Experiences</h2>
        <div className="row">
          {experiences.map((experience, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card experience-card">
                {/* <img
                  src={experience.image}
                  className="card-img-top"
                  alt={experience.name}
                ></img> */}
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ fontFamily: "Gill Sans", fontSize: 24 }}
                  >
                    <div className="school-logo">
                      <img
                        src={experience.image}
                        alt={experience.name}
                        title={experience.name}
                      />
                    </div>
                    <br></br>
                    {experience.name}
                  </h5>
                  <p style={{ fontFamily: "Didot", fontSize: 15 }}>
                    {experience.time}
                  </p>
                  <strong
                    className="card-text"
                    style={{ fontFamily: "Goudy Old Style", fontSize: 18 }}
                  >
                    {experience.pos}
                  </strong>
                  <p
                    className="card-text"
                    style={{ fontFamily: "Monaco", fontSize: 15 }}
                  >
                    {experience.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;

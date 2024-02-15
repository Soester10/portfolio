import resume from "../assets/Hariharan_Resume.pdf";

const Resume = () => {
  return (
    <div className="mc7">
      <div
        className="container ff resume"
        style={{ fontFamily: "Gill Sans", fontSize: 24 }}
      >
        Download my{" "}
        <a href={resume} target="_blank" className="resume-button hov">
          Resume
        </a>
        !!
      </div>
    </div>
  );
};

export default Resume;

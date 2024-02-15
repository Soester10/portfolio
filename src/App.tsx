import "./App.css";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Resume from "./components/Resume";
import Certs from "./components/Certs";

function App() {
  return (
    <>
      {/* <div>
        <Navbar />
      </div> */}

      <div>
        <Intro />
      </div>

      <hr className="linec"></hr>

      <div>
        <About />
      </div>

      <hr className="linec"></hr>

      <div>
        <Skills />
      </div>

      <hr className="linec"></hr>

      <div>
        <Experiences />
      </div>

      <hr className="linec"></hr>

      <div>
        <Projects />
      </div>

      <hr className="linec"></hr>

      <div>
        <Certs />
      </div>

      <hr className="linec"></hr>

      <div>
        <Resume />
      </div>
    </>
  );
}

export default App;

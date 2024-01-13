import React from "react";
import "./Home.css";
import { Reveal, Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Resume.pdf";

const Home = () => {
  return (
    <>
      <Reveal effect="fadeIn">
        <div className="container-fluid home-container" id="home">
          <div className="container home-content">
            <Fade direction="right" triggerOnce>
              <h2>Hi I'm Mohd Adil</h2>
              <h1>
                <Typewriter
                  options={{
                    strings: [
                      "FullStack Developer !",
                      "Programmer !",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </Fade>
            <Fade direction="bottom" triggerOnce>
              <div className="home-buttons">
                <a
                  className="btn btn-hire"
                  href="https://api.whatsapp.com/send?phone=9125918419"
                  rel="noreferrer"  
                  target="_blank"
                >
                  Hire Me
                </a>
                <a
                  className="btn btn-cv"
                  href={Resume}
                  download="Adil_Resume.pdf"
                >
                  My Resume
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default Home;

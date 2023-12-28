import React from "react";
import "./Home.css";
import Fade from 'react-reveal/Fade';
import Typewriter from "typewriter-effect";
import Resume from '../../assets/docs/Resume.pdf'

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="container home-content">
        <Fade right>
          <h2>Hi I'm Adil</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer !",
                  "Mern Stack Developer !",
                  "Programmer !",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          </Fade>
          <Fade bottom>
          <div className="home-buttons">
            <div className="btn btn-hire">Hire Me</div>
            <a className="btn btn-cv" href={Resume} download="your_name.pdf">My Resume</a>
          </div>
          </Fade>
        </div>
       
      </div>
    </>
  );
};

export default Home;

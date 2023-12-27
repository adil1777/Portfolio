import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from '../../assets/docs/Resume.pdf'
const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
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
          <div className="home-buttons">
            <div className="btn btn-hire">Hire Me</div>
            <a className="btn btn-cv" href={Resume} download="your_name.pdf">My Resume</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import "./About.css";
import { Bounce } from "react-awesome-reveal";

const About = () => {
  return (
    <>
        <Bounce>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6  col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src="image.jpeg" alt="profile_pic" />
            </div>
            <div className="col-md-6  col-xl-6 col-lg-6 col-xs-12 about-content">
             <h1>About Me</h1>
              <p>
                Greetings! I am <span className="self">Mohd Adil</span>,
                currently pursuing my Bachelor's degree in{" "} 
                <span className="self">Computer Science and Engineering</span>{" "}
                at <span className="self">KIET Group of Institutions </span> in{" "}
                <span className="self">Ghaziabad</span>. Originally from{" "}
                <span className="self">Azamgarh</span> , I completed my{" "}
                <span className="self">10th</span> and {" "}
                <span className="self">12th</span> studies at{" "}
                <span className="self">Azamgarh Public School </span>. My
                academic journey has fueled my passion for programming, and I
                specialize in languages like <span className="self">C</span>,{" "}
                <span className="self">C++</span>,{" "}
                <span className="self">HTML</span>,{" "}
                <span className="self">CSS</span>,{" "}
                <span className="self">JavaScript</span>,{" "}
                <span className="self">React.js</span>, and{" "}
                <span className="self">Node.js</span>. I've translated my skills
                into practical projects, including{" "}
                <span className="self pro">
                <a href="https://blood-bank-ym3c.onrender.com/#/login" style={{textDecoration:'none'}}>
                LifeDropHub </a></span> and{" "}
                <span className="self pro"> 
                 <a href="https://full-stack-real-estate-jade.vercel.app/" style={{textDecoration:'none'}}>Homyz </a></span>. Adding to my experience, I
                undertook a rewarding web development internship with{" "}
                <span className="self"> Oasis Infobyte </span>. This opportunity
                not only allowed me to contribute to real-world projects but
                also significantly enhanced my technical prowess. I am
                enthusiastic about leveraging technology to solve problems and
                am always eager to explore new horizons in the field of computer
                science. Feel free to explore my portfolio to learn more about
                my projects and experiences.
              </p>
            </div>
          </div>
        </div>
        </Bounce>
    </>
  );
};

export default About;

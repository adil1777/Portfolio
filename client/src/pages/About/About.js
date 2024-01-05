import React from "react";
import "./About.css";
import { Reveal, Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <>
     <Reveal effect="fadeIn">
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6  col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src="image.jpeg" alt="profile_pic" />
          </div>
          <div className="col-md-6  col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate molestias corporis quibusdam eligendi voluptatibus
              distinctio sit ratione explicabo ut adipisci necessitatibus
              tenetur repudiandae nemo, eaque hic fugiat veritatis nulla laborum
              impedit. Architecto quos excepturi rem ipsa perspiciatis
              doloremque obcaecati atque, ab numquam unde pariatur consequatur
              odio dolor tenetur dolorum impedit et magnam sed quasi culpa
              similique, suscipit recusandae vero. Accusantium eius dicta ullam
              ut, quia deleniti sequi reprehenderit modi voluptatum quidem
              tenetur quod porro saepe, veritatis fuga aperiam exercitationem
              repellendus consequatur ullam distinctio quae aut quo totam sit!
            </p>
          </div>
        </div>
      </div>
      </Reveal>
    </>
  );
};

export default About;

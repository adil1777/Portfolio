import React from "react";
import "./Projects.css";
import { Fade, Zoom } from "react-awesome-reveal";

const Projects = () => {
  return (
    <div className="container project" id="projects">
      <Fade direction="left">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          MY PROJECTS
        </h2>
        <hr />

        <p className="pb-3 text-center">
          Welcome to my project page, where innovation meets functionality!
          Here, I'm thrilled to showcase three distinct projects - Homyz, LifeDropHub, and DocCare. Each project represents a unique facet of my
          skills and interests, offering a glimpse into the versatile world of
          technology.
        </p>
      </Fade>
      {/* card design */}
      <div className="row" id="ads">

        {/* Project 1 */}
        <div className="col-md-4">
          <Zoom>
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img src="banner1.jpg" alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 >LifeDropHub</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://blood-bank-ym3c.onrender.com/#/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </Zoom>
        </div>

        {/* Project 2 */}
        <div className="col-md-4">
          <Zoom>
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img src="homyz.png" alt="project2" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Homyz</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://full-stack-real-estate-jade.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </Zoom>
        </div>

        {/* Project 3  DocCare*/}
        <div className="col-md-4">
          <Zoom>
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img src="doccare.jpg" alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5> DocCare</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://doccare-mln1.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Projects;

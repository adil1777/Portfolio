import React from "react";
import "./Projects.css";
// import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          MY PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Welcome to my project page, where innovation meets functionality!
          Here, I'm thrilled to showcase three distinct projects - Homyz, Blood
          Bank, and WeatherApp. Each project represents a unique facet of my skills
          and interests, offering a glimpse into the versatile world of
          technology.
        </p>

        {/* card design */}
        <div className="row" id="ads">
          {/* <Spin> */}

          {/* Project 1 */}
          <div className="col-md-4">
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
                  <h6 className="text-uppercase">Blood Bank</h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://blood-bank-ym3c.onrender.com/#/login"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4">
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
                >
                  View
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Backend</span>
                <img
                  src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>

                <span className="card-detail-badge">NoSQL</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase"> Job Portal</h5>
                </div>
                <a className="ad-btn" href="view">
                  View
                </a>
              </div>
            </div>
          </div>
          {/* </Spin> */}
        </div>
      </div>
    </>
  );
};

export default Projects;

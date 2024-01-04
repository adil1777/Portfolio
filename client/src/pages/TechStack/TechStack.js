import React from "react";
import "./TechStack.css";
import { Reveal, Fade } from "react-awesome-reveal";
import { TechStackList } from "../../utils/TechStackList";

const TechStack = () => {
  return (
    <>
    <Reveal effect="fadeIn">
      <div className="container techstack" id="techstack">
        <Fade >
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉 including Programming Languages , frameworks , databases,
            front-end and back-end tools , and APIs
          </p>
        </Fade>
        <div className="row">
          {TechStackList.map((tech) => (
            <Fade >
              <div className="col-md-3" key={tech._id}>
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="align-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
      </Reveal>
    </>
  );
};

export default TechStack;

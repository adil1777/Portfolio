import React from "react";
import "./Menus.css";
import { FcHome ,FcAbout, FcPortraitMode, FcBiotech, FcReading, FcVideoProjector, FcVoicePresentation, FcBusinessContact } from "react-icons/fc";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src="image.jpeg" alt="profile pic" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome />
                Home
              </div>
              <div className="nav-link">
              <FcAbout />
                About
              </div>
              <div className="nav-link">
              <FcReading/>
                Education
              </div>
              <div className="nav-link">
              <FcBiotech/>
               Tech Stack
              </div>
              <div className="nav-link">
              <FcVideoProjector />
                Project
              </div>
              <div className="nav-link">
              <FcPortraitMode />
                Work Experience
              </div>
              <div className="nav-link">
              <FcBusinessContact />
               Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
        <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome  title="Home"/>
              </div>
              <div className="nav-link">
              <FcAbout title="About"/>
              </div>
              <div className="nav-link">
              <FcReading title=" Education"/>
              </div>
              <div className="nav-link">
              <FcBiotech title="Tech Stack"/>
              </div>
              <div className="nav-link">
              <FcVideoProjector title=" Project" />
              </div>
              <div className="nav-link">
              <FcPortraitMode title=" Work Experience" />
              </div>
              <div className="nav-link">
              <FcBusinessContact title="Contact" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;

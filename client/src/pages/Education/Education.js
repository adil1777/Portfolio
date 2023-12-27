import React from "react";
import { IoMdSchool } from "react-icons/io";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

const Education = () => {
  return (
    <>
      <div className="container education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2020- present"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B-Tech</h3>
            <h4 className="vertical-timeline-element-subtitle">
              KIET Group Of Institutions, IN
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2018- 2019"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title"> Intermediate </h3>
            <h4 className="vertical-timeline-element-subtitle">
             Azamgarh Public School, IN
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;

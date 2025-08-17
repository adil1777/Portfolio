import React from 'react';
import { IoMdSchool } from "react-icons/io";
import {PiCertificateLight} from "react-icons/pi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './WorkExp.css';

const WorkExp = () => {
  return (
    <>
     <div className="work" id="work">
        <div className="container work-exp">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
             EXPERIENCE/INTERNSHIP
        </h2>
        <hr />
        <VerticalTimeline>
         <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="19 May 2024 - Present"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificateLight />}
          >
            <h3 className="vertical-timeline-element-title">Associate Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
             Binmile Technologies 
            </h4>
            <p>
                Backend Development, API Integration, Microservices, 
                Cloud Services, Performance Optimization
              </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="1 May 2022 - 31 May 2022"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificateLight />}
          >
            <h3 className="vertical-timeline-element-title">Web Development</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Oasis Infobyte
            </h4>
            <p>
                Frontend Development, Responsive Design, 
                JavaScript Enhancements, Project Deployment
              </p>
          </VerticalTimelineElement>

          {/* 2nd Internship */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="10 May 2022 - july 15 2022"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificateLight />}
          >
            <h3 className="vertical-timeline-element-title">Salesforce Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
             Salesforce
            </h4>
            <p>
                Apex Development, Triggers, Flow Automation, 
                Schema Customization, Custom Objects
              </p>
          </VerticalTimelineElement>
          </VerticalTimeline>
     </div>
     </div>
    </>
  )
}

export default WorkExp
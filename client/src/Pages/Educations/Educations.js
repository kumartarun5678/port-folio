import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Educations = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2021 - 2025"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-subtitle">
            Heritage Institute of Technology, Kolkata (IN)
            </h3>
            <h4 className="vertical-timeline-element-title">B.Tech in Computer Science and Business Systems.</h4>
            <h6 className="vertical-timeline-element-title">CGPA:- 7.776/10</h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2017 - 2019"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-subtitle"> S.U.college, hilsa(BR)
            </h3>
            <h4 className="vertical-timeline-element-title">12th in PCM</h4>
            <h5 className="vertical-timeline-element-title">Board:- Bihar School Examination Board</h5>
            <h6 className="vertical-timeline-element-title">Percentage:- 72.2%</h6>
             
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2016 - 2017"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-subtitle"> S.K.K HIGH SCHOOL, Nawadiha, Hilsa(BR)
            </h3>
            <h4 className="vertical-timeline-element-title">10th</h4>
            <h5 className="vertical-timeline-element-title">Board:- Bihar School Examination Board</h5>
            <h6 className="vertical-timeline-element-title">Percentage:- 64.8%</h6>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Educations;
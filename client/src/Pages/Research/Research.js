import React from "react";
import { FaResearchgate } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Research.css";
const Research = () => {
  return (
    <>
      <div className=" education" id="research">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Research
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2024-Present"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<FaResearchgate />}
          >
            <h3 className="vertical-timeline-element-subtitle">
            EXPLORING MULTIMODAL BIOMARKERS FOR AUTISM SPECTRUM DISORDER DIAGNOSIS.
            </h3>
            <p>
              <h7 className="vertical-timeline-element-title">
              To develop a machine learning model that utilize smultimodal data , including MRI scans, eye tracking data, and speech analysis, to improve the accuracy and efficiency of Autism Spectrum Disorder (ASD) prediction in children.
              </h7>
              <br />
              <h7 className="vertical-timeline-element-title">
              Engineered robust tools for precise Autism Spectrum Dysfunction detection by merging ABIDE and Kaggle data, leading to a 50% reduction in misdiagnoses and a 25% improvement in treatment outcomes.

              </h7>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Research;
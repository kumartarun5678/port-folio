import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="workexp">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2022 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">Memeber</h3>
              <h4 className="vertical-timeline-element-subtitle">
                GOOGLE DEVELOPER STUDENTS' CLUB HIT
              </h4>
              <p>
                Coordinated coding competitions with challenging algorithmic
                problems,drawing 50+ participants from diverse backgrounds;
                fostered collaboration and knowledge sharing, leading to a 30%
                increase in coding competition participation and engagement.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="01 Aug 2023 to 31 Aug 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Web Development Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">CODSOFT</h4>
              <p>
                Build and design perfect responsive web pages in HTML, CSS,
                React.js and CSS. ,Involved in Create Proper Scalable
                Backend(DataBase) using MongoDB., Creating and Testing APIs.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="1st July 2023 to 1 Aug 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Web Development and Designing intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">INTERNSAVY</h4>
              <p>
                Developed a weather app using HTML, CSS, JavaScript, and APIs.
                Implemented features for fetching weather data from APIs
                Designed user interface using HTML and CSS.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;

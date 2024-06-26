import React, { useEffect } from "react";
import {
  Link,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import "./Menus.css";
import profilePic from "../../Assets/Image/profile.jpg";
import {
  FcHome,
  FcAbout,
  FcSelfServiceKiosk,
  FcReadingEbook,
  FcVoicePresentation,
  FcContacts,
} from "react-icons/fc";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiArchiveResearch } from "react-icons/gi";
import { FaCode, FaResearchgate } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { SiCoursera } from "react-icons/si";
const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src={profilePic} alt="Profile Pic" />
            </div>
          </Zoom>
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcReadingEbook />
                    Education
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FaCode />
                    Tech Stack
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="course"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <SiCoursera />
                    Course Work
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="workexp"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcSelfServiceKiosk />
                    Work Experince
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <AiOutlineFundProjectionScreen />
                    Project
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="research"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FaResearchgate />
                    Research
                  </Link>
                </div>
              </div>
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcContacts />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <Fade left> 
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome title="Home" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcAbout title="About" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcReadingEbook title="Education" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcSelfServiceKiosk title="Work Experince" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <SiCoursera title="Course" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FaCode title="Tech Stack" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <AiOutlineFundProjectionScreen title="Project" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcVoicePresentation title="Research" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <FcContacts title="Contact" />
              </div>
            </div>
          </div>
        </Fade>
      )}
    </>
  );
};

export default Menus;

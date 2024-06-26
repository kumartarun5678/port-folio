import React from 'react';
import './About.css';
import ProfilePic from '../../Assets/Image/profile.jpg';
import Jump from "react-reveal/Jump"
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id='about'>
          <div className="row">
              <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                  <img src={ProfilePic} alt="Profile Image" />
              </div>
              <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                  <h1>About Me</h1>
                  <p>
                  I am a 4th-year B.Tech student at Heritage Institute of Technology, specializing in Computer Science and Business Systems. With two months of experience in web development, I have had the opportunity to intern at Codsoft and Internsavy, where I honed my skills and gained practical knowledge. At Codsoft, I focused on building and designing responsive web pages using HTML, CSS, and React.js, developing scalable backends with MongoDB, and creating and testing APIs. During my time at Internsavy, I developed a weather app using HTML, CSS, JavaScript, and APIs, implemented features to fetch weather data from APIs, and designed the user interface. My passion for technology and continuous learning drives me towards a career as a Software Developer, where I aspire to create innovative solutions and contribute to the ever-evolving tech industry.
                  </p>
              </div>
          </div>
        </div>
      </Jump>
    </>
  )
}

export default About

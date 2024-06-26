import React from "react";
import "./Project.css";
import Spin from "react-reveal/Spin";
import ds from"../../Assets/Image/DSs.jpg";
import ec from "../../Assets/Image/EC.jpg";
import ct from "../../Assets/Image/CT.jpg";
import da from "../../Assets/Image/DA.jpg";
import tx from "../../Assets/Image/TX.jpg";
import vt from "../../Assets/Image/VT.jpg";
const Project = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          PROJECTS
        </h2>
        <hr />

        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack(MERN)</span>
                  <img
                    src={da}
                    alt="Doctor Appointment"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React.js</span>
                  <span className="card-detail-badge">Node.js</span>
                  <span className="card-detail-badge">Express.js</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      Doctor's Appointment
                    </h5>
                  <p className="pa">This Doctor's Appointment project is a comprehensive web application developed using ReactJS, CSS, Node.js, Express.js, and MongoDB. The platform offers role-based access for Admins, Doctors, and Patients, ensuring tailored experiences and functionalities for each user type. Key features include appointment scheduling and management, user management, and notifications. The application streamlines the process of booking and managing appointments, enhancing the efficiency of healthcare services and improving the overall user experience.  
                  </p>
                  </div >

                  <a
                    className="ad-btn"
                    href="https://appointmentdoctor.netlify.app/"
                  >
                    Try
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/kumartarun5678/DoctorAppointment"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN</span>
                  <img
                    src={vt}
                    alt="Vehicle Tracking"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React.js</span>
                  <span className="card-detail-badge">Express.js</span>
                  <span className="card-detail-badge">Node.js</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Vehicle Tracking</h5>
                  <p className="pa">
                  The Vehicle Tracking System is a robust web application built using ReactJS, CSS, Node.js, Express.js, and MongoDB. It features input fields for users to enter starting and destination positions, allowing them to view all available buses on the specified route. Additionally, the system includes a form or interface for admins to add new buses, with access control to restrict this functionality to admin users only. This project leverages mapping capabilities to provide real-time tracking and improve the efficiency of public transportation management.
                  </p>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://vehicletracking.netlify.app/"
                  >
                    TRY
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/kumartarun5678/Smart_india_hackathon"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN</span>
                  <img
                    src={ds}
                    alt="DashBOARD"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React.js</span>
                  <span className="card-detail-badge">Express.js</span>
                  <span className="card-detail-badge">Node.js</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Dashboard</h5>
                  <p className="pa">
                  I am developing a dynamic dashboard using the MERN stack, incorporating ReactJS and Chart.js for data visualization. This project features a responsive and interactive dashboard that displays various metrics and analytics through charts and graphs. Backend services are powered by Node.js and Express.js, with MongoDB managing the data storage. The dashboard provides users with insightful visualizations, enhancing data comprehension and decision-making processes.
                  </p>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://dashboard-frontend-78et.onrender.com/"
                  >
                    TRY
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/kumartarun5678/Dashboard"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Front-end</span>
                  <img
                    src={tx}
                    alt="Text editor"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React.js</span>
                  <span className="card-detail-badge">React Redux</span>
                  <span className="card-detail-badge">CSS</span>
                  
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Text Editor</h5>
                    <p className="pa">
                    I have developed a versatile text editor using ReactJS that offers several functionalities to enhance text manipulation. This text editor allows users to convert text to uppercase and lowercase, count words, remove extra spaces, and copy text with ease. Designed with a user-friendly interface, the text editor provides efficient text processing tools, making it a handy application for everyday use.
                    </p>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://kumartarun5678.github.io/TextEditor/"
                  >
                    TRY
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/kumartarun5678/TextEditor"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Front-end</span>
                  <img
                    src={ec}
                    alt="E-commerce"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JAVASCRIPT</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">E-Commerce</h5>
                    <p className="pa">
                    I have created a fully functional e-commerce website using HTML, CSS, and JavaScript. The website features a clean and intuitive interface, providing users with a seamless shopping experience. Key functionalities include product listings, a shopping cart, and a secure checkout process. The design is responsive, ensuring optimal performance across various devices. This project showcases my ability to develop and design user-centric web applications with a focus on usability and functionality.
                    </p>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://kumartarun5678.github.io/E-commerce/index.html"
                  >
                    TRY
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/kumartarun5678/E-commerce"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src={ct}
                    alt="Chat WEBSITE"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JAVASCRIPT</span>
                  <span className="card-detail-badge">WEB SOCKET</span>
                  <span className="card-detail-badge">SOCKET.IO</span>
                  <span className="card-detail-badge">NODE.JS</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Chat Website</h5>
                    <p className="pa">
                    I have developed a real-time chat website using HTML, JavaScript, CSS, WebSocket, Socket.io, and Node.js. This application enables users to engage in instant messaging with seamless real-time communication. The chat interface is user-friendly and responsive, providing a smooth experience across different devices. Leveraging WebSocket and Socket.io, the application ensures efficient and reliable message delivery, making it an ideal platform for interactive online communication.
                    </p>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://kumartarun5678.github.io/ChatWebsite/"
                  >
                    TRY
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/kumartarun5678/ChatWebsite"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Project;
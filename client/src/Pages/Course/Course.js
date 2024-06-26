import React from "react";
import "./Course.css";
import Spin from "react-reveal/Spin";
import DS from "../../Assets/Image/DS.jpg"
import AI from "../../Assets/Image/AI.jpg"
import AWS from "../../Assets/Image/AWS.jpg"
import os from "../../Assets/Image/OS.png"
import SW from "../../Assets/Image/SW.jpg"
import NW from "../../Assets/Image/NW.jpg"
const Course = () => {
  return (
    <>
      <div className="container courses" id="course">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Course Work
        </h2>
        <hr />
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">NPTL</span>
                  <img
                    src={DS}
                    alt="Data Science"
                  />
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Data Science for Engineering
                    </h6>
                    <p>Indian Institute Of Technology–Madras</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">NPTL</span>
                  <img
                    src={AI}
                    alt="AI"
                  />
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Artificial Intelligence: Search Methods for Problem Solving
                    </h6>
                    <p>Indian Institute Of Technology–Madras</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Cloud Computing with AWS</span>
                  <img
                    src={AWS}
                    alt="aws"
                  />
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Cloud Computing With AWS
                    </h6>
                    <p>Heritage Institute of Technology</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Software Engineering</span>
                  <img
                    src={SW}
                    alt="SOFTWARE ENGINEERING"
                  />
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Software Engineering
                    </h6>
                    <p>Heritage Institute of Technology</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">OOPs</span>
                  <img
                    src={SW}
                    alt="OOPS"
                  />
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Object-Oriented Programming and System
                    </h6>
                    <p>Heritage Institute of Technology</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">OS</span>
                  <img
                    src={os}
                    alt="OPERATING SYSTEM"
                  />
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Operating Systems
                    </h6>
                    <p>Heritage Institute of Technology</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">DBMS</span>
                  <img
                    src={DS}
                    alt="DATABASE"
                  />
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Database Management System
                    </h6>
                    <p>Heritage Institute of Technology</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">CN</span>
                  <img
                    src={NW}
                    alt="COMPUTER NETWORK"
                  />
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Computer Network
                    </h6>
                    <p>Heritage Institute of Technology</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">AT</span>
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="Automata"
                  />
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Automata Theory
                    </h6>
                    <p>Heritage Institute of Technology</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">DSA</span>
                  <img
                    src={SW}
                    alt="DSA"
                  />
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Data Structures and Algorithms
                    </h6>
                    <p>Heritage Institute of Technology</p>
                  </div>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Course;

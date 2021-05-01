import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCalculator,
  faCode,
  faCogs,
  faDatabase,
  faDesktop,
  faFileCode,
  faTasks,
  faWarehouse,
  faWheelchair,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="knowledge" className="services">
      <h1>knowledge</h1>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon className="icon" icon={faTasks} size="2x" />
                </div>
                <h3>Manual Testing</h3>
                <p>
                  Making E2E Test in Agile team. Creation and execution test
                  cases, log defects using Jira. Manage schedule to complete all
                  testing for release deadlines.
                </p>
              </div>
            </div>
            {/* - */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon className="icon" icon={faCogs} size="2x" />
                </div>
                <h3>Test Automation</h3>
                <p>
                  Developing Wall-E test automation tool by using Java Swing
                  Library. I keep improving myself about Selenium webdriver.
                </p>
              </div>
            </div>
            {/* - */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon className="icon" icon={faJava} size="2x" />
                </div>
                <h3>Desktop App</h3>
                <p>
                  Using Java Swing Library and will create a course about Java
                  Desktop App. Using mySQL, postgreSQL and i keep improving
                  myself about mongoDB for noSQL technologies.
                </p>
              </div>
            </div>
            {/* - */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon className="icon" icon={faCode} size="2x" />
                </div>
                <h3>Web Development</h3>
                <p>
                  I'm learning web development with using javascript, HTML5,
                  CSS3, nodejs. I developed this site to learn reactJs. I create
                  api for learning backend technologies by using nodeJs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

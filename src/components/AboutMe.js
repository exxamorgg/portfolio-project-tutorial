import React from "react";
import myImage from "../ben.jpg";
import myQRCode from "../qrcode.png";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-3">
            <img className="profile-img" src={myImage} alt="doesn't exit" />
          </div>
          <div className="photo-wrap mb-1">
            <p className="photo-info">Mehmet ÖCAL | Software Engineer</p>
          </div>
          <div className="photo-wrap mb-1">
            <p className="photo-info">
              For linkedin{" "}
              <a
                href="https://www.linkedin.com/in/mehmet%C3%B6cal/"
                target="_blank"
                rel="noreferrer"
              >
                HERE
              </a>{" "}
              or use QR on below
            </p>
          </div>
          <div className="photo-wrap mb-5">
            <img className="linkedin-img" src={myQRCode} alt="doesn't exist" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12 paragraph">
          <h1 className="about-heading">about Me</h1>
          <p>
            Hello, I'm Mehmet. I have been doing E2E Test and product
            configuration for over 3 years in Agile teams. I made UAT test
            before E2E tests and product configuration. I'm analyzing business
            requirements, creation of test plan, identify test scenarios, create
            test cases, preparation of test data, run the test cases, record the
            results, confirm business objectives. Also, I'm interest in
            "Test Automation" and "Web Development". I was develop Wall-E test
            automation tool by using Java Swing and I keep improving myself
            about Selenium webdriver for learning test automation. I use Source
            Tree and Bitbucket repositories for package management while product
            configuration. Technologies that i use like;
            <p> </p>
            <p>
              <u>For Testing:</u> Java Swing, PostMan, SoapUI, WinSCP,
              MobaXterm, Putty.
            </p>
            <p>
              <u>For Development:</u> JavaScript, HTML5, CSS3, NodeJs,
              AngularJs, ReactJs I keep improving myself about responsive
              websites.
            </p>
            <p>
              <u>For Database:</u> MySQL, PostgreSQL, MongoDB.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

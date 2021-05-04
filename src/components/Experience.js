import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>02/2021-Present</h3>
            <p>
              Vodafone, Turkey, Software Engineer, Outsource Employee Via Magis
              Technology
            </p>
            <p>
              Making billing and charging configuration in Agile team and i have
              experince with SCRUM standups. Analyze of defect processes. Giving
              fix to products which has a configuration error and following the
              deployment process. Using Source Tree and bitbucket repositories
              for package management.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>03/2019-02/2021</h3>
            <p>
              Vodafone, Turkey, Test Engineer, Outsource Employee Via Magis
              Technology
            </p>
            <p>
              Making E2E test in Agile team. Creation and execution test cases
              and log defects by using Jira. Developing "Wall-E Automation Test
              Tool" for billing & charging domains. Manage schedule to complete
              all testing in time for release deadlines. Collaborate closely
              with Developers, Products Managers to clarify inconsistencies
              between spec and outcomes. Testbook creation and bug reports.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>10/2018-03/2019</h3>
            <p>Magis Technology, Turkey, Software Test Engineer</p>
            <p>
              Making User Acceptance Testing "UAT" for Vodafone services via
              Android app, IOS app and Web channel. Validation of E2E business
              flow. Making "Beta Testing". Analysis of business requirements,
              creation of UAT test plan, identify Test scenarios, create UAT
              test cases, preparation of test data, run the test cases, record
              the results, confirm business objectives.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2014-2018</h3>
            <p>Yıldız Technical University, Istanbul, Turkey</p>
            <p>
              I graduated from YTU Geomatics Engineering department with 3.22/4
              degree. I was interested in development and testing in my school
              life. I studied on LIDAR and making location accurance tests by
              using Android app. To calculate accurance ratio and reports bug.
              You can check my CV{" "}
              <a
                href="https://www.keepandshare.com/doc14/28376/mehmet-cal-cv-pdf-191k?da=y"
                target="_blank"
                rel="noreferrer"
              >
                HERE.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

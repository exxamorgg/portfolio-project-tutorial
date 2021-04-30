import React from "react";
import pcCoffe from "../pc-coffe.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  const openFirstPopUp = () => {
      
    const content = (
        <>
      <img className= "portfolio-image-popupbox" src={pcCoffe} alt="FirstPhoto"></img>
      <p>
        1) Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <b>Github:</b>{" "}
      <a
        className="hyper-link"
        onClick={() =>
          window.open(
            "https://github.com/MehmetOCAL2347/portfolio-project-tutorial"
          )
        }
      >
        https://github.com/MehmetOCAL2347/portfolio-project-tutorial
      </a>
    </>
    )
    PopupboxManager.open({ content });
  };

  const popupboxConfigFirstImage = {
    titleBar: {
        enable: true,
        text: "First Image Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  const openSecondPopUp = () => {
      
    const content = (
        <>
      <img className= "portfolio-image-popupbox" src={pcCoffe} alt="FirstPhoto"></img>
      <p>
        2) Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <b>Github:</b>{" "}
      <a
        className="hyper-link"
        onClick={() =>
          window.open(
            "https://github.com/MehmetOCAL2347/portfolio-project-tutorial"
          )
        }
      >
        https://github.com/MehmetOCAL2347/portfolio-project-tutorial
      </a>
    </>
    )
    PopupboxManager.open({ content });
  };

  const popupboxConfigSecondImage = {
    titleBar: {
        enable: true,
        text: "Second Image Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  const openThirdPopUp = () => {
      
    const content = (
        <>
      <img className= "portfolio-image-popupbox" src={pcCoffe} alt="FirstPhoto"></img>
      <p>
        3) Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <b>Github:</b>{" "}
      <a
        className="hyper-link"
        onClick={() =>
          window.open(
            "https://github.com/MehmetOCAL2347/portfolio-project-tutorial"
          )
        }
      >
        https://github.com/MehmetOCAL2347/portfolio-project-tutorial
      </a>
    </>
    )
    PopupboxManager.open({ content });
  };

  const popupboxConfigThirdImage = {
    titleBar: {
        enable: true,
        text: "Third Image Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  const openFourthPopUp = () => {
      
    const content = (
        <>
      <img className= "portfolio-image-popupbox" src={pcCoffe} alt="FirstPhoto"></img>
      <p>
        4) Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <b>Github:</b>{" "}
      <a
        className="hyper-link"
        onClick={() =>
          window.open(
            "https://github.com/MehmetOCAL2347/portfolio-project-tutorial"
          )
        }
      >
        https://github.com/MehmetOCAL2347/portfolio-project-tutorial
      </a>
    </>
    )
    PopupboxManager.open({ content });
  };

  const popupboxConfigFourthImage = {
    titleBar: {
        enable: true,
        text: "Fourth Image Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>

        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openFirstPopUp}>
            <img
              className="portfolio-image"
              src={pcCoffe}
              alt="My Project"
            ></img>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          {/* - */}

          <div className="portfolio-image-box" onClick={openSecondPopUp}>
            <img
              className="portfolio-image"
              src={pcCoffe}
              alt="My Project"
            ></img>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

          <div className="portfolio-image-box" onClick={openThirdPopUp}>
            <img
              className="portfolio-image"
              src={pcCoffe}
              alt="My Project"
            ></img>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

          <div className="portfolio-image-box" onClick={openFourthPopUp}>
            <img
              className="portfolio-image"
              src={pcCoffe}
              alt="My Project"
            ></img>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigFirstImage} />
      <PopupboxContainer {...popupboxConfigSecondImage} />
      <PopupboxContainer {...popupboxConfigThirdImage} />
      <PopupboxContainer {...popupboxConfigFourthImage} />
    </div>
  );
};

export default Portfolio;

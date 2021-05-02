import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon
} from "react-share";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Istanbul, Turkey</p>
            </div>
            <div className="d-flex">
              <p className="footer-nav">+90(506)484 92 95</p>
            </div>
            <div className="d-flex">
              <p>ocal.mehmet@outlook.com.tr</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home" offset={-110}  className="footer-nav">Home</Link>
                <br />
                <Link smooth={true} to="about" offset={-110}  className="footer-nav">About Me</Link>
                <br />
                <Link smooth={true} to="knowledge" offset={-110}  className="footer-nav">Knowledge</Link>
              </div>
              <div className="col">
                <Link smooth={true} to="experience" offset={-110}  className="footer-nav">Experience</Link>
                <br />
                {/* <Link smooth={true} to="portfolio" offset={-110}  className="footer-nav">Portfolio</Link> */}
                {/* <br /> */}
                <Link smooth={true} to="contact" offset={-90}  className="footer-nav">Contact Me</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={
                  "https://mehmetocal.netlify.app"
                }
                quote={"Software Test Engineer"}
                hashtag="#java"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>

              <TwitterShareButton
                url={
                  "https://mehmetocal.netlify.app"
                }
                quote={"Software Test Engineer"}
                hashtag="#java"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>

              <LinkedinShareButton
                url={
                  "https://mehmetocal.netlify.app"
                }
                quote={"Software Test Engineer"}
                hashtag="#java"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>

              <WhatsappShareButton
                url={
                  "https://mehmetocal.netlify.app"
                }
                quote={"Software Test Engineer"}
                hashtag="#java"
              >
                <WhatsappIcon className="mx-3" size={36} />
              </WhatsappShareButton>

            </div>
            <p className="pt-3 text-center">
                Copyright&copy;
                {new Date().getFullYear()}&nbsp;Mehmet ÖCAL | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

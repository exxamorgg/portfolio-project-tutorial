import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                {/* <p>Test Automation & Web Development</p> */}
                <Typed className="typed-text"
                strings={["Manual Testing", "Test Automation", "Desktop App", "Web Development"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <Link smooth={true} to="about" offset={-110} href="#" className="btn-main-offer">Who am I?</Link>
            </div>
        </div>
    )
}

export default Header

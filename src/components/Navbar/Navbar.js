import React from "react";
import "./navbar.css";
import contactImg from "../../assets/contact.jpg";
// import { Link } from "react-scroll";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">
        <img className="logo" src={require("../../assets/ko.png")} alt="" />
      </a>
      <div className="desktopMenu">
        <Link
          // activeClass="active"
          to="/"
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link to="/skills" className="desktopMenuListItem">
          Skills
        </Link>
        {/* <Link className="desktopMenuListItem">Resume</Link> */}
        <Link to="/portfolio" className="desktopMenuListItem">
          Portfolio
        </Link>
        <Link to="/contact" className="desktopMenuListItem">
          Contact
        </Link>
      </div>
      {/* <button className="desktopMenuBtn">
        <img src={contactImg} alt="ContactImage" className="desktopMenuImg" />
        Contact Me
      </button> */}
    </nav>
  );
};

export default Navbar;

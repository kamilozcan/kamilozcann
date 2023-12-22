import React from "react";
import "./navbar.css";
// import contactImg from "../../assets/contact.jpg";
// import { Link } from "react-scroll";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">
        <img className="logo" src="/assets/ko.png" alt="logo" />
      </a>

      <div className="desktopMenu">
        <NavLink activeclass="active" to="/" spy={true} className="desktopMenuListItem">
          About
        </NavLink>
        {/* <NavLink activeclass="active" spy={true} to="/skills" className="desktopMenuListItem">
          Skills
        </NavLink> */}
        {/* <Link className="desktopMenuListItem">Resume</Link> */}
        <NavLink
          activeclass="active"
          spy={true}
          to="/portfolio"
          className="desktopMenuListItem"
        >
          Portfolio
        </NavLink>
        <NavLink
          activeclass="active"
          spy={true}
          to="/contact"
          className="desktopMenuListItem"
        >
          Contact
        </NavLink>
        {/* <NavLink
        activeClass="active"
        spy={true}
        to="/text"
        className="desktopMenuListItem" >
Text
        </NavLink> */}
        {/* <NavLink activeClass="active"
        spy={true}
        to="/timeline"
        className="desktopMenuListItem">
Timeline
        </NavLink> */}
      </div>
      {/* <button className="desktopMenuBtn">
        <img src={contactImg} alt="ContactImage" className="desktopMenuImg" />
        Contact Me
      </button> */}
    </nav>
  );
};

export default Navbar;

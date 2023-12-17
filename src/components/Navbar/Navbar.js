import React from "react";
import "./navbar.css";
import contactImg from "../../assets/contact.jpg";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logo" src={require("../../assets/ko.png")} alt="" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Resume</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">Clients</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contactImg} alt="ContactImage" className="desktopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;

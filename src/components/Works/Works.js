import React from "react";

import "./works.css";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        have to write some description here about my portfolio
      </span>

      <div className="worksImgs">
        {/* <img
          src={require("../../assets/NYPS/NYPSImg.jpg")}
          alt="NewYorkPedicabServices"
          className="worksImg"
        /> */}
        <img
          src="/assets/RocElev/AppIcon.png"
          alt="RocketElevator"
          className="worksImg"
        />
        <img
          src="/assets/TT/project-typing.png"
          alt="TouchTyping"
          className="worksImg"
        />
        <img
          src="/assets/Movies/MovieAppPic.PNG"
          alt="MovieApplication"
          className="worksImg"
        />
        <Link to="/coffeeApp">
          <img
            src="/assets/Coffees/coffee.all.PNG"
            alt="CoffeeApplication"
            className="worksImg"
          />
        </Link>
      </div>
      {/* <button className="worksBtn">See More</button> */}
    </section>
  );
};

export default Works;

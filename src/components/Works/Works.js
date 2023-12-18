import React from "react";

import "./works.css";

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
          src={require("../../assets/RocElev/AppIcon.png")}
          alt="RocketElevator"
          className="worksImg"
        />
        <img
          src={require("../../assets/TT/project-typing.png")}
          alt="TouchTyping"
          className="worksImg"
        />
        <img
          src={require("../../assets/Movies/MovieAppPic.PNG")}
          alt="MovieApplication"
          className="worksImg"
        />
        <img
          src={require("../../assets/Coffees/coffee.all.PNG")}
          alt="CoffeeApplication"
          className="worksImg"
        />
      </div>
      <button className="worksBtn">See More</button>
    </section>
  );
};

export default Works;

import React from "react";

import "./coffeeapp.css";



const CoffeeApp = () => {
  return (
    <section id="coffeeApp">
      <h2 className="worksTitle">Coffee App</h2>
      <span className="source">
        <a
          href="https://github.com/kamilozcan/Coffee-App-React-Native"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Source
        </a>
      </span>
      <span className="description">
        This mobile app provides a smooth coffee discovery and ordering
        experience. The Home Screen showcases coffee categories, while the
        Coffee Details Screen offers immersive views of individual products.
      </span>
      <div className="portfolioImgs">
        <img
          src={require("../../../assets/Coffees/coffee.all.PNG")}
          alt="coffeeAll"
          className="portfolioImg"
        />

      </div>
    </section>
  );
};

export default CoffeeApp;

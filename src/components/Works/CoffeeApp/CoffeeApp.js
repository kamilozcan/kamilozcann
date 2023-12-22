import React from "react";

import "./coffeeapp.css";

const CoffeeApp = () => {
  return (
    <section id="coffeeApp">
      <h2 className="worksTitle">Coffee App</h2>
      <span>
        <p style={{ color: "red" }}>(This project is in progress)</p>
      </span>
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
          src="/assets/Coffees/coffee.all.PNG"
          alt="coffeeAll"
          className="portfolioImg"
        />
        <img
          src="/assets/Coffees/coffee.cappuccino.PNG"
          alt="coffeeAll"
          className="portfolioImg"
        />
        <img
          src="/assets/Coffees/coffee.espresso.PNG"
          alt="coffeeAll"
          className="portfolioImg"
        />
        <img
          src="/assets/Coffees/coffee.cappuccino1.PNG"
          alt="coffeeAll"
          className="portfolioImg"
        />
        <img
          src="/assets/Coffees/coffee.espresso1.PNG"
          alt="coffeeAll"
          className="portfolioImg"
        />
        <img
          src="/assets/Coffees/coffee.latte.PNG"
          alt="coffeeAll"
          className="portfolioImg"
        />
        <img
          src="/assets/Coffees/coffee.flatwhite.PNG"
          alt="coffeeAll"
          className="portfolioImg"
        />
        <img
          src="/assets/Coffees/cart.PNG"
          alt="coffeeAll"
          className="portfolioImg"
        />
        <img
          src="/assets/Coffees/favorite.PNG"
          alt="coffeeAll"
          className="portfolioImg"
        />
        <img
          src="/assets/Coffees/orderhistory.PNG"
          alt="coffeeAll"
          className="portfolioImg"
        />
      </div>
    </section>
  );
};

export default CoffeeApp;

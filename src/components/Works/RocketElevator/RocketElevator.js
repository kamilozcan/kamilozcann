import React from "react";
import "./rocketelevator.css";

const RocketElevator = () => {
  return (
    <section id="rocketElevator">
      <h2 className="worksTitle">Rocket Food Delivery</h2>
      <span className="note">
        <p style={{ color: "red" }}>
          (I can add you as a collaborator on GitHub if needed)
        </p>
      </span>
      <span className="description">
        This mobile app simplifies food delivery for customers and couriers
        alike. Customers can easily explore restaurants, place orders, and view
        order history, while couriers efficiently manage deliveries.
      </span>
      <div className="portfolioImgs">
        <video
          src="/assets/RocElev/RocketFoodDelivery.mp4"
          controls
          className="portfolioVideoApp"
        ></video>
      </div>
    </section>
  );
};

export default RocketElevator;

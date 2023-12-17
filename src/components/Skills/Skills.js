import React from "react";
import "./skills.css";

import WebDev from "../../assets/icon-dev.svg";
import MobDev from "../../assets/icon-app.svg";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I'm Doing</span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={WebDev} alt="WebDevelopment" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>Aiming for the Highest Quality in Website Development</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={MobDev} alt="MobileDevelopment" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Mobile Development</h2>
            <p>
              As a novice Mobile App Developer, I'm dedicated to professional
              growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import bg from "../../assets/ProfilePic.png";
import "./intro.css";
// import TextSphere from "../TextShpere/TextShpere";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hi! I'm</span>
        <span className="introText">
          <span className="introName">Kamil Ozcan</span> <br />
        </span>
        <span className="typewriter">
          and I'm a{" "}
          <span style={{ color: "#d17842", fontWeight: "bold" }}>
            <Typewriter
              words={[
                "Software Developer",
                "curious mind",
                "detail-oriented",
                "active-learner",
                "team player",
                "proactive",
                "self-starter",
                "human",
              ]}
              loop={0}
              deleteSpeed={1}
              cursorStyle="|"
            />
          </span>
        </span>

        <span>
          <p className="introParagraph">
            Software developer with a focus on web and app development. <br />I
            have a knack for simplifying intricate challenges and creating{" "}
            <br />
            software solutions that are as functional as they are visually
            appealing. <br />
            With proficiency in various programming languages and tools, <br />
            I'm passionate about turning your software concepts into
            user-friendly and attractive applications.
          </p>
        </span>
      </div>
      <div>
        <img src={bg} alt="ProfilePic" className="bg" />
        <div className="socialLinks">
          <a
            href="https://www.linkedin.com/in/kamilozcan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="socialIcon" />
          </a>
          <a
            href="https://github.com/kamilozcan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="socialICon" />
          </a>
        </div>
      </div>
      {/* <span className="tag-cloud-container">
        <TextSphere />
      </span> */}
    </section>
  );
};

export default Intro;

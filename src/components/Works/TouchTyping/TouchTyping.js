import React from "react";
import "./touchtyping.css";

const TouchTyping = () => {
  return (
    <section id="touchTyping">
      <h2 className="worksTitle">Touch Typing</h2>
      <span className="source">
        <a
          href="https://github.com/kamilozcan/typing-project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Source
        </a>
      </span>
      <span className="description">
        This code essentially creates an interactive typing test game where
        users can challenge themselves, track their typing speed, accuracy, and
        see previous performance.
      </span>
      <div className="portfolioImgs">
        <video
          src="/assets/TT/TouchTyping.mp4"
          controls
          className="portfolioVideoWeb"
        ></video>
      </div>
    </section>
  );
};

export default TouchTyping;

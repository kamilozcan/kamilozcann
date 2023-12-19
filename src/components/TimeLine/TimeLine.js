import React from "react";
import "./timeline.css";
import timelineElements from "./timelineElements";

const TimeLine = () => {
  return (
    <section className="timeline">
      <h1>Timeline</h1>
      <div className="timeline-container">
        {timelineElements.map((element) => (
          <div className="timeline-item" key={element.key}>
            <div className="timeline-content">
              <span>
                <p>
                  <a
                    href={element.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="white"
                    className="link"
                  >
                    {element.title}
                  </a>{" "}
                  <span className="date">{element.date}</span>
                </p>
              </span>
              <span className="summary">
                <p>{element.summary}</p>
              </span>
              <span className="description">
                {Array.isArray(element.description) &&
                  element.description.map((desc, index) => (
                    <p key={index}>{desc}</p>
                  ))}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimeLine;

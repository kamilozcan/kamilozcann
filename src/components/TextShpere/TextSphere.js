import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud"; // Ensure that TagCloud is imported correctly

import "./textsphere.css";

const TextSphere = () => {
  const tagCloudRef = useRef(null);

  useEffect(() => {
    const container = tagCloudRef.current;
    const texts = [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Ruby",
      "React",
      "React-Native",
      "NodeJS",
      "ExpressJS",
      "Rails",
      "RESTful API",
      "SQL Server",
      "MongoDB",
      "Postman",
      "Git",
      "GitHub",
    ];

    const options = {
      radius: 200,
      maxSpeed: "normal",
      initSpeed: "normal",
      direction: 135,
      keep: true,
    };

    TagCloud(container, texts, options);

    // Cleanup function to remove previous circles
    return () => {
      const previousCloud = container.querySelector(".tagcloud");
      if (previousCloud) {
        previousCloud.innerHTML = ""; // Clear the previous circles
      }
    };
  }, []); // Empty dependency array to run this effect only once

  return (
    <div className="text-sphere">
      <span ref={tagCloudRef}></span>
    </div>
  );
};

export default TextSphere;

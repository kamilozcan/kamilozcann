import React from "react";
import "./moviesearchapp.css";

const MovieSearchApp = () => {
  return (
    <section id="movieApp">
      <h2 className="worksTitle">Movie Search App</h2>
      <span className="source">
        <a
          href="https://github.com/kamilozcan/Movie-App-React-Native"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Source
        </a>
      </span>
      <span className="description">
        This mobile app allows users to browse and search for movies. It
        leverages the "The Movie Database (TMDb)" API to fetch information about
        movies, including their titles, posters, and other details.
      </span>
      <div className="portfolioImgs">
        <video
          src="/assets/Movies/MovieApp.mp4"
          controls
          className="portfolioVideoApp"
        ></video>
      </div>
    </section>
  );
};

export default MovieSearchApp;

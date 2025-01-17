import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  return (
    <ul className={`${classes["movies-list"]}  ${classes["movie-container"]}`}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          director={movie.director}
        />
      ))}
    </ul>
  );
};

export default MovieList;

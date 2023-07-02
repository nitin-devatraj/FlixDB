import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import Button from "./components/Button";
import HeroText from "./components/HeroText";
import Icon from "./assets/icon.png";
import "./App.css";

function App() {
  const [movies, setMovies] = useState();
  function fetchMoviesHandler() {
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((result) => {
        const transformedMovies = result.results.map((movie) => {
          return {
            id: movie.episode_id,
            title: movie.title,
            openingText: movie.opening_crawl,
            releaseDate: movie.release_date,
            director: movie.director,
          };
        });

        setMovies(transformedMovies);
      });
  }

  return (
    <React.Fragment>
      <section className="header">
        <div>
          <img src={Icon} height="70" alt="#" /> <h1>FlixDB</h1>
        </div>
        <Button onClick={fetchMoviesHandler}>Fetch Movies</Button>
      </section>
      <section className="main">
        {movies ? <MoviesList movies={movies} /> : <HeroText />}
      </section>
    </React.Fragment>
  );
}

export default App;

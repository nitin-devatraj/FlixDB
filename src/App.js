import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import Button from "./components/Button";
import HeroText from "./components/HeroText";
import Spinner from "./components/Spinner";
import Icon from "./assets/icon.png";
import "./App.css";

function App() {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films");
    const result = await response.json();
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
    setIsLoading(false);
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
        {isLoading && <Spinner />}
        {movies && <MoviesList movies={movies} />}
        {!movies && !isLoading && <HeroText />}
      </section>
    </React.Fragment>
  );
}

export default App;

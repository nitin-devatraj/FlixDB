import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import Button from "./components/Button";
import HeroText from "./components/HeroText";
import Spinner from "./components/Spinner";
import ErrorText from "./components/ErrorText";
import AddMovie from "./components/AddMovie";
import Icon from "./assets/icon.png";
import "./App.css";

function App() {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(false);
    try {
      const response = await fetch("https://swapi.dev/api/film");
      if (!response.ok) {
        throw new Error("something went wrong");
      }
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
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  function addMovieHandler(movie) {
    setShowForm(false);
    console.log(movie);
  }

  function showFormHandler() {
    setShowForm(true);
  }

  return (
    <React.Fragment>
      <section className="header">
        <div>
          <img src={Icon} height="70" alt="#" /> <h1>FlixDB</h1>
        </div>
        <button onClick={showFormHandler} className="button">
          Add Movies
        </button>
        <Button onClick={fetchMoviesHandler}>Fetch Movies</Button>
      </section>
      <section className="main">
        {isLoading && <Spinner />}
        {movies && <MoviesList movies={movies} />}
        {!movies && !isLoading && !error && <HeroText />}
        {showForm && <AddMovie onAddMovie={addMovieHandler} />}
        {!isLoading && error && <ErrorText message={error} />}
      </section>
    </React.Fragment>
  );
}

export default App;

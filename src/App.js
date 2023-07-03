import React, { useState } from "react";
import MoviesList from "./components/movies/MoviesList";
import Button from "./components/ui/Button";
import HeroText from "./components/ui/HeroText";
import Spinner from "./components/ui/Spinner";
import ErrorText from "./components/ui/ErrorText";
import AddMovie from "./components/addMovie/AddMovie";
import Icon from "./assets/icon.png";
import classes from "./App.module.css";

function App() {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(false);
    setShowForm(false);
    try {
      const response = await fetch(
        "https://flixdb-95f8d-default-rtdb.europe-west1.firebasedatabase.app/movies.json"
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const result = await response.json();

      const loadedMovies = [];
      for (const key in result) {
        loadedMovies.push({
          id: key,
          ...result[key],
        });
      }
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  async function addMovieHandler(movie) {
    setShowForm(false);
    setIsLoading(true);
    const response = await fetch(
      "https://flixdb-95f8d-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setIsLoading(false);
  }

  function showFormHandler() {
    setMovies(false);
    setShowForm(true);
  }

  function hideFormHandler() {
    setShowForm(false);
  }

  return (
    <React.Fragment>
      <section className={classes.header}>
        <div>
          <img src={Icon} height="70" alt="#" /> <a href="/">FlixDB</a>
        </div>
        <div>
          <button onClick={showFormHandler} className={classes.button}>
            Add Movies
          </button>
          <Button onClick={fetchMoviesHandler}>Fetch Movies</Button>
        </div>
      </section>
      <section className={classes.main}>
        {isLoading && <Spinner />}
        {movies && <MoviesList movies={movies} />}
        {!movies && !isLoading && !error && <HeroText />}
        {showForm && (
          <AddMovie onAddMovie={addMovieHandler} onCancel={hideFormHandler} />
        )}
        {!isLoading && !showForm && error && <ErrorText message={error} />}
      </section>
    </React.Fragment>
  );
}

export default App;

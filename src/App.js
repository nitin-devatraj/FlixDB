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
      <section className="header">
        <div>
          <img src={Icon} height="70" alt="#" /> <h1>FlixDB</h1>
        </div>
        <div>
          <button onClick={showFormHandler} className="button">
            Add Movies
          </button>
          <Button onClick={fetchMoviesHandler}>Fetch Movies</Button>
        </div>
      </section>
      <section className="main">
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

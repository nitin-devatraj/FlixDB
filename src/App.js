import React from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";
import "./App.css";
import Icon from "./assets/icon.png";

function App() {
  const dummyMovies = [
    {
      id: 1,
      title: "Some Dummy Movie",
      openingText: "This is the opening text of the movie",
      releaseDate: "2021-05-18",
    },
    {
      id: 2,
      title: "Some Dummy Movie 2",
      openingText: "This is the second opening text of the movie",
      releaseDate: "2021-05-19",
    },
  ];

  return (
    <React.Fragment>
      <section className="header">
        <div>
          <img src={Icon} height="70" alt="#" /> <h1>FlixDB</h1>
        </div>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={dummyMovies} />
      </section>
    </React.Fragment>
  );
}

export default App;

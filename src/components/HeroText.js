import React from "react";
import "./HeroText.css";

const HeroText = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-title">Lights, Camera, FlixDB!</h1>
      <p className="hero-description">
        Welcome to the FlixDB, where your film collection comes to life.
      </p>
      <p className="hero-description">
        Submit your favorite movies and share them with the world!
      </p>
      <p className="hero-description">
        Build your personalized movie database and discover new favorites.
      </p>
      <p className="hero-cta">
        Click on <span>Add Movies</span> to add new Movies to FlixDB or{" "}
        <span>Fetch Movies</span> to explore your movie collection on FlixDB.
      </p>
    </div>
  );
};

export default HeroText;

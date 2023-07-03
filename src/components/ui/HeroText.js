import React from "react";
import classes from "./HeroText.module.css";

const HeroText = () => {
  return (
    <div className={classes.hero_container}>
      <h1 className={classes.hero_title}>Lights, Camera, FlixDB!</h1>
      <p className={classes.hero_description}>
        Welcome to the FlixDB, where your film collection comes to life.
      </p>
      <p className={classes.hero_description}>
        Submit your favorite movies and share them with the world!
      </p>
      <p className={classes.hero_description}>
        Build your personalized movie database and discover new favorites.
      </p>
      <p className={classes.hero_cta}>
        Click on <span>Add Movies</span> to add new Movies to FlixDB or{" "}
        <span>Fetch Movies</span> to explore your movie collection on FlixDB.
      </p>
    </div>
  );
};

export default HeroText;

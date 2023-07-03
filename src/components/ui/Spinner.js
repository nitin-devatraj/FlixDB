import React from "react";
import classes from "./Spinner.module.css";
const Spinner = () => {
  return (
    <div className={classes.spinner_container}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Spinner;

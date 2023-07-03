import React from "react";
import classes from "./ErrorText.module.css";

const Error = (props) => {
  return (
    <div className={classes.error_container}>
      <div className={classes.error_icon}>!</div>
      <div className={classes.error_message}>{props.message}</div>
    </div>
  );
};

export default Error;

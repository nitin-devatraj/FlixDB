import React from "react";
import "./ErrorText.css";

const Error = (props) => {
  return (
    <div className="error-container">
      <div className="error-icon">!</div>
      <div className="error-message">{props.message}</div>
    </div>
  );
};

export default Error;

import React, { useState } from "react";
import "./Button.css";

const Button = (props) => {
  const [isSwiggling, setIsSwiggling] = useState(false);

  const handleClick = () => {
    props.onClick();
    setIsSwiggling(true);

    let timerID = setTimeout(() => {
      setIsSwiggling(false);
    }, 1000);

    return () => {
      clearTimeout(timerID);
    };
  };

  return (
    <button
      className={`swiggle-button ${isSwiggling && "swiggling"}`}
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

import React, { useRef, useState } from "react";
import classes from "./AddMovie.module.css";

function AddMovie(props) {
  const [isFormValid, setIsFormValid] = useState(true);
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");
  const directorRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    if (
      !(
        titleRef.current.value ??
        openingTextRef.current.value ??
        releaseDateRef.current.value ??
        directorRef.current.value
      )
    ) {
      setIsFormValid(false);
      return;
    }

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
      director: directorRef.current.value,
    };

    props.onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        {!isFormValid && <p>Please enter valid data</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="director">Director</label>
        <input type="text" id="director" ref={directorRef} />
      </div>
      <button className={classes.btn}>Add Movie</button>
      <button className={classes.btn} onClick={props.onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default AddMovie;

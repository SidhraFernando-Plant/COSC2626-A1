import React from 'react';
import movie from '../img/movie.png';

export default function Movie(props) {
  const MAX_STRING_LENGTH = 200;
  var description =
    props.description.length > MAX_STRING_LENGTH
      ? props.description.substring(0, MAX_STRING_LENGTH - 3) + '...'
      : props.description;

  return (
    <div className="d-flex movie">
      <img src={movie}></img>
      <div className="ms-3">
        <h4>{props.title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

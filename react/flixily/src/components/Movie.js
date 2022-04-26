import React from 'react';

export default function Movie(props) {
  const MAX_STRING_LENGTH = 200;
  var description =
    props.description.length > MAX_STRING_LENGTH
      ? props.description.substring(0, MAX_STRING_LENGTH - 3) + '...'
      : props.description;

  return (
    <a
      href={`/movie/${props.recId}`}
      className="text-reset text-decoration-none"
    >
      <div className="d-flex movie">
        {props.imageHref === undefined || props.imageHref === null ? (
          <img
            className="movie-poster"
            src="https://flixily-images.s3.amazonaws.com/movie.png"
          ></img>
        ) : (
          <img className="movie-poster" src={props.imageHref}></img>
        )}
        <div className="ms-3">
          <h4>{props.title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
}

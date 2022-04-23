import React from 'react';
import movie from '../img/movie.png';

export default function Movie(props) {
  return (
    <div className="d-flex movie">
      <img src={movie}></img>
      <div className="ms-3">
        <h4>{props.title}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          pellentesque arcu at sollicitudin molestie. Aenean at suscipit justo,
          in faucibus nulla. Suspendisse sit amet dui at velit molestie
        </p>
      </div>
    </div>
  );
}

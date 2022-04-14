import React from 'react';
import movie from '../img/movie.png';

export default function Movie() {
  return (
    <div className="d-flex mb-4">
      <img src={movie}></img>
      <div className="ms-3">
        <h4>Dance Academy: The Comeback</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          pellentesque arcu at sollicitudin molestie. Aenean at suscipit justo,
          in faucibus nulla. Suspendisse sit amet dui at velit molestie
          elementum. Integer fringilla posuere mauris a imperdiet. Maecenas
          tincidunt tristique nulla.
        </p>
      </div>
    </div>
  );
}

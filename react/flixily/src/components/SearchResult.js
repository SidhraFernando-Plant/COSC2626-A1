import React, { useEffect } from 'react';
import Movie from './Movie';

export default function (props) {
  return (
    <div>
      <h3>Search results</h3>
      {props.movie.Response === 'False' ? (
        <p>
          Sorry, we couldn't find any movies with that title! Please try
          searching a different title.
        </p>
      ) : (
        <div className="half-width">
          <Movie
            title={props.movie.Title}
            description={props.movie.Plot}
            imageHref={props.movie.Poster}
          />
          <button
            className="btn btn-dark"
            onClick={(event) => props.submitMethod(event)}
          >
            Submit recommendation
          </button>
        </div>
      )}
    </div>
  );
}

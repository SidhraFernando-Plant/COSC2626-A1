import React from 'react';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Flixily!</h1>
      <div className="d-flex bg-dark align-items-center rounded">
        <img
          src="https://flixily-images.s3.amazonaws.com/watching-together.jpg"
          className="half-width"
        ></img>
        <div className="m-auto">
          <p className="text-light">
            Streamlining the process of choosing what to watch.
          </p>
          <a href="/login" className="m-auto">
            <button type="button" class="btn btn-outline-light">
              Log in
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

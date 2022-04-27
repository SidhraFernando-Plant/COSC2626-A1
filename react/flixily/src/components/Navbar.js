import React from 'react';
import repository from '../data/repository';

export default function Navbar() {
  function signOut(event) {
    // Remove user info from localStorage
    event.preventDefault();
    repository.logOut();
    window.location.href = '/';
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
        <a className="navbar-brand" href="/">
          <img
            src="https://flixily-images.s3.amazonaws.com/cinema.png"
            className="logo"
          ></img>
          Flixily
        </a>
        {repository.isLoggedIn() && (
          <div className="d-flex">
            <a href="/dashboard">
              <img
                src="https://flixily-images.s3.amazonaws.com/home.png"
                className="logo"
              ></img>
            </a>
            <button
              className="btn btn-light me-4"
              onClick={(event) => signOut(event)}
            >
              Log out
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

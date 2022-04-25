import React from 'react';
import logo from '../img/cinema.png';
import home from '../img/home.png';
import repository from '../data/repository';

export default function Navbar() {
  console.log(repository.isLoggedIn());
  function signOut(event) {
    event.preventDefault();
    repository.logOut();
    window.location.href = '/';
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
        <a className="navbar-brand" href="/">
          <img src={logo} className="logo"></img>
          Flixily
        </a>
        {repository.isLoggedIn() && (
          <div className="d-flex">
            <a href="/dashboard">
              <img src={home} className="logo"></img>
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

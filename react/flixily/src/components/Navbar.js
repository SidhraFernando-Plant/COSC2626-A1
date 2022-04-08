import React from 'react';
import logo from '../img/cinema.png';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img src={logo} className="logo"></img>
          Flixily
        </a>
      </nav>
    </div>
  );
}

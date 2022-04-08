import React from 'react';
import avatar from '../img/avatar.png';

export default function Profile() {
  return (
    <div className="mb-4">
      <h2>Your Profile</h2>
      <div className="profile bg-dark text-light rounded">
        <img src={avatar} className="avatar rounded-circle d-inline"></img>
        <h3 className="d-inline ms-3">ilovemovies</h3>
      </div>
    </div>
  );
}

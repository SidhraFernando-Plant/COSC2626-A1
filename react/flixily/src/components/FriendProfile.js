import React from 'react';
import Profile from './Profile';
import Movie from './Movie';

export default function FriendProfile() {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <Profile />
        <button type="button" class="btn btn-dark">
          Recommend
        </button>
      </div>
      <div className="d-flex">
        <div className="half-width">
          <h2>Our List</h2>
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </div>
        <div className="half-width">
          <h2>New recommendations</h2>
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </div>
      </div>
    </div>
  );
}

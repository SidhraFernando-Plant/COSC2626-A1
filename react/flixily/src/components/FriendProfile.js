import React from 'react';
import Profile from './Profile';
import Movie from './Movie';
import { useEffect, useState } from 'react';
import RecommendationService from '../services/RecommendationService';

export default function FriendProfile() {
  const [recs, setRecs] = useState(null);
  // useEffect(() => {
  //   RecommendationService.getRecommendations('sidi', 'alex')
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, []);
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

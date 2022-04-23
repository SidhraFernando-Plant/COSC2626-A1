import React, { Fragment } from 'react';
import Profile from './Profile';
import Movie from './Movie';
import { useEffect, useState } from 'react';
import RecommendationService from '../services/RecommendationService';

export default function FriendProfile() {
  const [recs, setRecs] = useState(null);
  useEffect(() => {
    RecommendationService.getRecommendations('sidi', 'alex')
      .then((response) => {
        setRecs(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-between">
        <Profile username="alex" />
        <button type="button" class="btn btn-dark">
          Recommend
        </button>
      </div>
      <div className="d-flex">
        <div className="half-width">
          <h2>Our List</h2>
          {recs === null ? (
            <p>Loading...</p>
          ) : (
            <Fragment>
              {recs.map((rec) => (
                <Movie
                  key={rec.recommendation_id}
                  title={rec.title}
                  director={rec.director}
                />
              ))}
            </Fragment>
          )}
          {/* <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie /> */}
        </div>
        <div className="half-width">
          <h2>New recommendations</h2>
          {recs === null ? (
            <p>Loading...</p>
          ) : (
            <Fragment>
              {recs.map((rec) => (
                <Movie
                  key={rec.recommendation_id}
                  title={rec.title}
                  director={rec.director}
                />
              ))}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

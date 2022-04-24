import React, { Fragment } from 'react';
import Profile from './Profile';
import Movie from './Movie';
import { useEffect, useState } from 'react';
import RecommendationService from '../services/RecommendationService';
import { useParams } from 'react-router';

export default function FriendProfile() {
  const [recs, setRecs] = useState(null);
  const [matches, setMatches] = useState(null);
  const { usernameReq } = useParams();
  useEffect(() => {
    RecommendationService.getRecommendations('sidi', 'alex')
      .then((response) => {
        setRecs(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    RecommendationService.getMatches('sidi', 'alex')
      .then((response) => {
        setMatches(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-between">
        <Profile username={usernameReq} />
        <a href="/new-rec">
          <button type="button" class="btn btn-dark">
            Recommend
          </button>
        </a>
      </div>
      <div className="d-flex">
        <div className="half-width">
          <h2>Our List</h2>
          {matches === null ? (
            <p>Loading...</p>
          ) : (
            <Fragment>
              {matches.map((match) => (
                <Movie
                  key={match.recommendation_id}
                  title={match.title}
                  director={match.director}
                  description={match.description}
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
                  description={rec.description}
                />
              ))}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

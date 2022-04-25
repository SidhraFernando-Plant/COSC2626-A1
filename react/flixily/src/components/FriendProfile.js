import React, { Fragment } from 'react';
import Profile from './Profile';
import Movie from './Movie';
import { useEffect, useState } from 'react';
import RecommendationService from '../services/RecommendationService';
import { useParams } from 'react-router';
import repository from '../data/repository';

export default function FriendProfile() {
  const [recs, setRecs] = useState(null);
  const [matches, setMatches] = useState(null);
  const { usernameReq } = useParams();
  const username = repository.getUser();
  useEffect(() => {
    RecommendationService.getRecommendations(usernameReq, username)
      .then((response) => {
        setRecs(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    RecommendationService.getMatches(usernameReq, username)
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
        <a href={`/new-rec/${usernameReq}`}>
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
              {matches.length === 0 ? (
                <p>No movies chosen yet.</p>
              ) : (
                <Fragment>
                  {matches.map((match) => (
                    <Movie
                      key={match.recommendation_id}
                      recId={match.recommendation_id}
                      title={match.title}
                      director={match.director}
                      description={match.description}
                    />
                  ))}
                </Fragment>
              )}
            </Fragment>
          )}
        </div>
        <div className="half-width">
          <h2>New recommendations</h2>
          {recs === null ? (
            <p>Loading...</p>
          ) : (
            <Fragment>
              {recs.length === 0 ? (
                <p>No movies chosen yet.</p>
              ) : (
                <Fragment>
                  {recs.map((rec) => (
                    <Movie
                      key={rec.recommendation_id}
                      recId={rec.recommendation_id}
                      title={rec.title}
                      director={rec.director}
                      description={rec.description}
                    />
                  ))}
                </Fragment>
              )}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

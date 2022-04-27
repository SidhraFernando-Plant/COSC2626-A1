import React, { Fragment } from 'react';
import Profile from './Profile';
import Movie from './Movie';
import { useEffect, useState } from 'react';
import RecommendationService from '../services/RecommendationService';
import { useParams } from 'react-router';
import repository from '../data/repository';
import { errorResponse } from '../util/ErrorResponse';

export default function FriendProfile() {
  const [recs, setRecs] = useState(null);
  const [matches, setMatches] = useState(null);
  const { usernameReq } = useParams();
  const username = repository.getUser();
  useEffect(() => {
    // Get the recommendations and matches the current user shares with the user being viewed
    RecommendationService.getRecommendations(usernameReq, username)
      .then((response) => {
        setRecs(response.data);
      })
      .catch(() => {
        errorResponse();
      });
    RecommendationService.getMatches(usernameReq, username)
      .then((response) => {
        setMatches(response.data);
      })
      .catch(() => {
        errorResponse();
      });
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-between">
        <Profile username={usernameReq} />
        <a href={`/new-rec/${usernameReq}`}>
          <button type="button" class="btn btn-dark rec-btn">
            + Recommend
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
                    <a
                      href={`/movie/${match.recommendation_id}/true`}
                      className="text-reset text-decoration-none"
                    >
                      <Movie
                        key={match.recommendation_id}
                        title={match.title}
                        director={match.director}
                        description={match.description}
                        imageHref={match.poster}
                      />
                    </a>
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
                    <a
                      href={`/movie/${rec.recommendation_id}/false`}
                      className="text-reset text-decoration-none"
                    >
                      <Movie
                        key={rec.recommendation_id}
                        title={rec.title}
                        director={rec.director}
                        description={rec.description}
                        imageHref={rec.poster}
                      />
                    </a>
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

import React, { Fragment, useState } from 'react';
import RecommendationService from '../services/RecommendationService';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import Trailer from './Trailer';
import { errorResponse } from '../util/ErrorResponse';

export default function InspectMovie(props) {
  const { id } = useParams();
  const { isApproved } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    // Fetch data regarding the movie being viewed from db
    RecommendationService.getRecommendation(id)
      .then((response) => {
        setMovie({
          title: response.data[0].title,
          description: response.data[0].description,
          imageHref: response.data[0].poster,
        });
      })
      .catch(() => {
        errorResponse();
      });
  }, []);

  function respond(isApproved) {
    // Aprove/reject the recommendation by updating its status in db
    let data = {
      isApproved: isApproved,
      id: id,
    };
    RecommendationService.updateStatus(data)
      .then((response) => {
        alert(
          `You have successfully ${
            isApproved ? 'approved' : 'rejected'
          } this recommendation.`
        );
        window.location.href = '/dashboard';
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      {movie === null ? (
        <p>Loading</p>
      ) : (
        <div className="d-flex">
          {movie.imageHref === null || movie.imageHref === undefined ? (
            <img
              className="big-poster"
              src="https://flixily-images.s3.amazonaws.com/movie.png"
            ></img>
          ) : (
            <img className="big-poster" src={movie.imageHref}></img>
          )}
          <div className="ms-3 movie-intro">
            <div className="d-flex align-items-center">
              <h1>{movie.title}</h1>
              {isApproved !== 'true' && (
                <Fragment>
                  <img
                    className="action-btn ms-3"
                    src="https://flixily-images.s3.amazonaws.com/tick.png"
                    onClick={() => respond(true)}
                  ></img>
                  <img
                    className="action-btn ms-1"
                    src="https://flixily-images.s3.amazonaws.com/cross.png"
                    onClick={() => respond(false)}
                  ></img>
                </Fragment>
              )}
            </div>
            <p>{movie.description}</p>
            <div className="d-flex align-items-center">
              <Trailer title={movie.title} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

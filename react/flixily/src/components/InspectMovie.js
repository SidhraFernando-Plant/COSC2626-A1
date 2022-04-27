import React, { Fragment, useState } from 'react';
import RecommendationService from '../services/RecommendationService';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import YoutubeService from '../services/YoutubeService';
import Trailer from './Trailer';
import { PresignedPost } from 'aws-sdk/clients/s3';

export default function InspectMovie(props) {
  const { id } = useParams();
  const { isApproved } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    RecommendationService.getRecommendation(id)
      .then((response) => {
        setMovie({
          title: response.data[0].title,
          description: response.data[0].description,
          imageHref: response.data[0].poster,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  function respond(isApproved) {
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
              {/* <h3>Rating: </h3>
              <img
                className="star ms-2"
                src="https://flixily-images.s3.amazonaws.com/star.png"
              ></img>
              <img
                className="star"
                src="https://flixily-images.s3.amazonaws.com/star.png"
              ></img>
              <img
                className="star"
                src="https://flixily-images.s3.amazonaws.com/star.png"
              ></img>
              <img
                className="star"
                src="https://flixily-images.s3.amazonaws.com/star.png"
              ></img>
              <img
                className="star"
                src="https://flixily-images.s3.amazonaws.com/star-outline.png"
              ></img>
              <h3 className="ms-4">Starring: </h3>
              <p className="mt-0 mb-0 ms-4 me-4">Xenia Goodwin</p>
              <p className="mt-0 mb-0 ms-4 me-4">Jordan Rodrigues</p>
              <p className="mt-0 mb-0 ms-4 me-4">Alicia Banit</p> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

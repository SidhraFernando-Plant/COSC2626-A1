import React from 'react';
import RecommendationService from '../services/RecommendationService';
import { useState } from 'react';
import { useParams } from 'react-router';
import repository from '../data/repository';
import OMDBService from '../services/OMDBService';
import SearchResult from './SearchResult';
import { errorResponse } from '../util/ErrorResponse';

export default function NewRec() {
  const [title, setTitle] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const { userTo } = useParams();

  function addMovie(event) {
    event.preventDefault();
    let movie = {
      title: searchResults.Title,
      director: searchResults.Director,
      desc: searchResults.Plot,
      poster: searchResults.Poster,
      userBy: repository.getUser(),
      userTo: userTo,
    };
    // Submit the new recommendation to the db
    RecommendationService.createRecommendation(movie)
      .then((response) => {
        alert('Your recommendation was submitted succesfully!');
        window.location.href = '/dashboard';
      })
      .catch(() => {
        errorResponse();
      });
  }

  function searchMovie(event) {
    event.preventDefault();
    OMDBService.getMovie(title)
      .then((response) => {
        console.log(response);
        setSearchResults(response.data);
      })
      .catch(() => {
        errorResponse();
      });
  }

  return (
    <div>
      <h1>New recommendation to {userTo}</h1>
      <form className="d-flex align-items-center mb-4">
        <div class="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter movie title"
            onChange={(event) => setTitle(event.target.value)}
          ></input>
        </div>
        <button
          class="btn btn-dark ms-2"
          onClick={(event) => searchMovie(event)}
        >
          Search
        </button>
      </form>
      {searchResults !== null && (
        <SearchResult movie={searchResults} submitMethod={addMovie} />
      )}
    </div>
  );
}

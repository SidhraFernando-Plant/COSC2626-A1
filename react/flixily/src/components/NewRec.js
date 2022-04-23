import React from 'react';
import RecommendationService from '../services/RecommendationService';

export default function NewRec() {
  let title = '';
  let director = '';

  // Make it the fancy set input function?
  function setTitle(newTitle) {
    title = newTitle;
  }

  function setDirector(newDirector) {
    director = newDirector;
  }

  function addMovie(event) {
    event.preventDefault();
    let movie = {
      title: title,
      director: director,
      userBy: 'sidi',
      userTo: 'alex',
    };
    console.log(movie);
    RecommendationService.createRecommendation(movie)
      .then((response) => {
        console.log(response);
        alert('Success!');
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <h1>New recommendation</h1>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter movie title"
            onChange={(event) => setTitle(event.target.value)}
          ></input>
        </div>
        <div class="form-group mb-3">
          <label for="exampleInputEmail1">Director</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter movie director"
            onChange={(event) => setDirector(event.target.value)}
          ></input>
        </div>
        <button class="btn btn-dark" onClick={(event) => addMovie(event)}>
          Submit
        </button>
      </form>
    </div>
  );
}

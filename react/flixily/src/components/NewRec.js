import React from 'react';
import RecommendationService from '../services/RecommendationService';
import { useState } from 'react';

export default function NewRec() {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [description, setDescription] = useState('');

  function addMovie(event) {
    event.preventDefault();
    let movie = {
      title: title,
      director: director,
      desc: description,
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
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter movie title"
            onChange={(event) => setTitle(event.target.value)}
          ></input>
        </div>
        <div class="form-group mb-3">
          <label>Director</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter movie director"
            onChange={(event) => setDirector(event.target.value)}
          ></input>
        </div>
        <div class="form-group mb-3">
          <label>Description</label>
          <input
            type="textarea"
            className="form-control"
            placeholder="Enter movie director"
            onChange={(event) => setDescription(event.target.value)}
          ></input>
        </div>
        <button class="btn btn-dark" onClick={(event) => addMovie(event)}>
          Submit
        </button>
      </form>
    </div>
  );
}

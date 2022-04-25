import React from 'react';
import RecommendationService from '../services/RecommendationService';
import { useState } from 'react';
import { useParams } from 'react-router';
import repository from '../data/repository';

export default function NewRec() {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [description, setDescription] = useState('');
  const { userTo } = useParams();

  function addMovie(event) {
    event.preventDefault();
    let movie = {
      title: title,
      director: director,
      desc: description,
      userBy: repository.getUser(),
      userTo: userTo,
    };
    console.log(movie);
    RecommendationService.createRecommendation(movie)
      .then((response) => {
        alert('Your recommendation was submitted succesfully!');
        window.location.href = '/dashboard';
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <h1>New recommendation to {userTo}</h1>
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

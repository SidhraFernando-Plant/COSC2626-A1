import React, { useState } from 'react';
import UsersService from '../services/UsersService';
import repository from '../data/repository';

export default function LogIn(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function login(event) {
    event.preventDefault();
    const reqBody = {
      username: username,
      password: password,
    };
    UsersService.login(reqBody)
      .then(() => {
        repository.logIn(username);
        window.location.href = '/dashboard';
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <h1 className="text-center">Login</h1>
      <div className="login-form p-4 rounded text-light">
        <div class="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            onChange={(event) => setUsername(event.target.value)}
          ></input>
        </div>
        <div class="form-group mb-3 mt-2">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
      </div>
      <button
        class="btn btn-dark d-block m-auto mt-2"
        onClick={(event) => login(event)}
      >
        Submit
      </button>
    </div>
  );
}

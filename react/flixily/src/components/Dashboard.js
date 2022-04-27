import React, { useState } from 'react';
import Profile from './Profile';
import Friends from './Friends';
import repository from '../data/repository';
import UsersService from '../services/UsersService';
import YoutubeService from '../services/YoutubeService';
import { useEffect } from 'react';
import { errorResponse } from '../util/ErrorResponse';

export default function Dashboard(props) {
  const [username, setUsername] = useState(repository.getUser());
  const [friends, setFriends] = useState(null);
  useEffect(() => {
    // Restrict access if not logged in
    if (username === null) {
      alert("Sorry, you can't access this page!");
      window.location.href = '/';
    } else {
      // Load user's friend list
      UsersService.getFriends(username)
        .then((response) => {
          console.log(response.data);
          setFriends(response.data);
        })
        .catch(() => {
          errorResponse();
        });
    }
  }, []);
  return (
    <div className="m-auto dashboard profile">
      {username === null || friends === null ? (
        <p>Loading...</p>
      ) : (
        <div className="d-flex flex-column">
          <h2>My Profile</h2>
          <Profile
            style="background"
            username={username}
            myProfile={true}
            friends={friends.length}
          />
          <Friends friendsList={friends} />
        </div>
      )}
    </div>
  );
}

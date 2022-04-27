import React, { useState } from 'react';
import Profile from './Profile';
import RequestList from './RequestList';
import Friends from './Friends';
import repository from '../data/repository';
import UsersService from '../services/UsersService';
import YoutubeService from '../services/YoutubeService';
import { useEffect } from 'react';

export default function Dashboard(props) {
  const [username, setUsername] = useState(repository.getUser());
  const [friends, setFriends] = useState(null);
  useEffect(() => {
    if (username === null) {
      alert("Sorry, you can't access this page!");
      window.location.href = '/';
    } else {
      UsersService.getFriends(username)
        .then((response) => {
          console.log(response.data);
          setFriends(response.data);
        })
        .catch((error) => {
          console.log(error);
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

import React, { Fragment } from 'react';
import Profile from './Profile';

export default function Friends(props) {
  return (
    <div>
      <h2>My friends</h2>
      {props.friendsList.map((friend, index) => (
        <Fragment>
          <Profile key={index} username={friend}></Profile>
          <hr></hr>
        </Fragment>
      ))}
    </div>
  );
}

import { PresignedPost } from 'aws-sdk/clients/s3';
import React from 'react';
import Profile from './Profile';

export default function Friends(props) {
  return (
    <div>
      <h2>My friends</h2>
      {props.friendsList.map((friend, index) => (
        <Profile style="outline" key={index} username={friend}></Profile>
      ))}
    </div>
  );
}

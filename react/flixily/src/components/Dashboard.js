import React from 'react';
import Profile from './Profile';
import RequestList from './RequestList';
import Friends from './Friends';
import repository from '../data/repository';
import { useEffect } from 'react';

export default function Dashboard(props) {
  useEffect(() => {}, []);
  return (
    <div>
      <div className="d-flex">
        <div className="d-flex flex-column half-width">
          <h2>My Profile {props.username}</h2>
          <Profile style="background" username={props.username} />
          <RequestList />
        </div>
        <div className="half-width">
          <Friends />
        </div>
      </div>
    </div>
  );
}

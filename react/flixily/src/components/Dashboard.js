import React from 'react';
import Profile from './Profile';
import RequestList from './RequestList';
import Friends from './Friends';

export default function Dashboard() {
  return (
    <div>
      <div className="d-flex">
        <div className="d-flex flex-column half-width">
          <Profile />
          <RequestList />
        </div>
        <Friends />
      </div>
    </div>
  );
}

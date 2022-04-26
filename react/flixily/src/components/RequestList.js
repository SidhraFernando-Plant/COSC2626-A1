import React from 'react';
import Profile from './Profile';

export default function RequestList() {
  return (
    <div>
      <h2>Friend Requests</h2>
      <Profile isRequest={true} />
      <Profile isRequest={true} />
      <Profile isRequest={true} />
      <Profile isRequest={true} />
      <Profile isRequest={true} />
    </div>
  );
}

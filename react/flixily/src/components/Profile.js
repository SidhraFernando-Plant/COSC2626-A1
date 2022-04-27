import React, { Fragment } from 'react';

export default function Profile(props) {
  return (
    <div>
      {props.myProfile ? (
        <div className="d-flex flex-column align-items-center mb-4 bg-dark text-light rounded p-4">
          <img
            className="avatar rounded-circle"
            src={`https://ui-avatars.com/api/?name=${props.username}&background=random`}
          ></img>
          <h3>{props.username}</h3>
          <p className="friends">{props.friends} friends</p>
        </div>
      ) : (
        <a
          href={`/profile/${props.username}`}
          className="text-reset text-decoration-none"
        >
          <div className="d-flex align-items-center mb-4">
            <img
              className="avatar-small rounded-circle"
              src={`https://ui-avatars.com/api/?name=${props.username}&background=random`}
            ></img>
            <h3 className="ms-3">{props.username}</h3>
          </div>
        </a>
      )}
    </div>
  );
}

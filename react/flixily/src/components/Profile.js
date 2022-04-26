import React, { Fragment } from 'react';

export default function Profile(props) {
  let classes = 'profile d-flex align-items-center mb-4';
  if (props.style === 'background') {
    classes += ' bg-dark text-light rounded';
  } else if (props.style === 'outline') {
    classes += ' border-bottom border-dark';
  }
  return (
    <a
      href={`/profile/${props.username}`}
      className="text-reset text-decoration-none"
    >
      <div className={classes}>
        <img
          className="avatar rounded-circle"
          src={`https://ui-avatars.com/api/?name=${props.username}&background=random`}
        ></img>
        <h3 className="ms-3">{props.username}</h3>
        {props.isRequest && (
          <React.Fragment>
            <img
              className="action-btn ms-3"
              src="https://flixily-images.s3.amazonaws.com/tick.png"
            ></img>
            <img
              className="action-btn ms-1"
              src={'https://flixily-images.s3.amazonaws.com/cross.png'}
            ></img>
          </React.Fragment>
        )}
      </div>
    </a>
  );
}

import React, { Fragment } from 'react';
import avatar from '../img/avatar.png';
import tick from '../img/tick.png';
import cross from '../img/cross.png';

export default function Profile(props) {
  let classes = 'profile d-flex align-items-center mb-4';
  if (props.style === 'background') {
    classes += ' bg-dark text-light rounded';
  } else if (props.style === 'outline') {
    classes += ' border-bottom border-dark';
  }
  return (
    <div className={classes}>
      <img src={avatar} className="avatar rounded-circle"></img>
      <h3 className="ms-3">ilovemovies</h3>
      {props.isRequest && (
        <React.Fragment>
          <img className="action-btn ms-3" src={tick}></img>
          <img className="action-btn ms-1" src={cross}></img>
        </React.Fragment>
      )}
    </div>
  );
}

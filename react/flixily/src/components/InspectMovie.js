import React from 'react';
import movie from '../img/movie.png';
import tick from '../img/tick.png';
import cross from '../img/cross.png';
import star from '../img/star.png';
import outline from '../img/star-outline.png';

export default function InspectMovie() {
  return (
    <div>
      <div className="d-flex">
        <img className="big-poster" src={movie}></img>
        <div className="ms-3 movie-intro">
          <div className="d-flex align-items-center">
            <h1>Dance Academy: The Comeback</h1>
            <img className="action-btn ms-3" src={tick}></img>
            <img className="action-btn ms-1" src={cross}></img>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            pellentesque arcu at sollicitudin molestie. Aenean at suscipit
            justo, in faucibus nulla. Suspendisse sit amet dui at velit molestie
            elementum. Integer fringilla posuere mauris a imperdiet. Maecenas
            tincidunt tristique nulla. Nunc pharetra maximus ligula nec
            suscipit. Duis mollis, dolor et volutpat tempus, mauris purus
            ullamcorper urna, eget condimentum quam ipsum eu felis. Donec
            facilisis erat id commodo faucibus. Vestibulum tempor ac mi eget
            convallis. Nulla turpis tortor, convallis at risus sit amet, dictum
            vehicula ligula. Etiam urna metus, blandit sit amet sapien ut,
            malesuada consectetur ligula. Mauris ac nibh ut est lacinia aliquam
            eu ac nulla. Maecenas eget varius sapien. Morbi lacinia fermentum
            dignissim. Ut imperdiet vehicula venenatis. Nullam sapien nulla,
            ornare eget est nec, imperdiet tempus arcu. Sed venenatis diam non
            est rutrum, ac cursus enim hendrerit. Quisque sapien erat, feugiat
            ut enim ac, malesuada consectetur ipsum. Quisque et urna vulputate,
            luctus justo ac, suscipit orci. Integer vitae faucibus ex.
          </p>
          <div className="d-flex align-items-center">
            <h3>Rating: </h3>
            <img className="star ms-2" src={star}></img>
            <img className="star" src={star}></img>
            <img className="star" src={star}></img>
            <img className="star" src={star}></img>
            <img className="star" src={outline}></img>
            <h3 className="ms-4">Starring: </h3>
            <p className="mt-0 mb-0 ms-4 me-4">Xenia Goodwin</p>
            <p className="mt-0 mb-0 ms-4 me-4">Jordan Rodrigues</p>
            <p className="mt-0 mb-0 ms-4 me-4">Alicia Banit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

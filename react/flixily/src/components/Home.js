import React from 'react';
import watching from '../img/watching-together.jpg';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Flixily!</h1>
      <div className="d-flex">
        <img src={watching} className="half-width me-3"></img>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
            pharetra urna, et semper justo. Nunc id pulvinar arcu, sed auctor
            nunc. In hac habitasse platea dictumst. Proin eros sem, finibus
            vitae lorem sit amet, elementum scelerisque leo. Donec rhoncus
            sapien sit amet nisl varius mollis. Integer lacinia, lectus sed
            porta convallis, odio nisi fermentum lorem, efficitur luctus turpis
            ligula ac arcu. Ut libero leo, tempus non erat nec, consectetur
            cursus ligula. Curabitur a elementum felis, non tincidunt nibh. Ut
            neque mi, efficitur quis venenatis vitae, aliquet sed urna. Donec
            lacus est, ultrices et cursus sit amet, condimentum id metus. Donec
            tristique eu magna at malesuada. Aliquam erat volutpat. Fusce vel
            lacinia elit.
          </p>

          <button type="button" class="btn btn-dark me-3">
            Sign up
          </button>
          <a href="/login">
            <button type="button" class="btn btn-outline-dark">
              Log in
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

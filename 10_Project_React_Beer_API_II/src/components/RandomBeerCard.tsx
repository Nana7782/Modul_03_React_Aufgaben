import randomBeers from "../assets/img/randombeer.png";
import { NavLink } from "react-router-dom";

function RandomBeerCard() {
  return (
    <div>
      <div className="start">
        <div className="emotion-image">
          <img src={randomBeers} alt="pints of beers" className="image" />

          <NavLink to="/beers/random" className="button">
            Random Beer
          </NavLink>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            minima dolores nobis vitae placeat a consequatur iste error
            similique, ipsam eligendi facilis sed mollitia nemo ratione? Debitis
            ut ducimus illo suscipit sequi numquam, vel dolorem culpa commodi
            dignissimos, at, rem accusantium eos! Quibusdam optio quas ex non,
            sint necessitatibus voluptate.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RandomBeerCard;

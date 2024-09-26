import { useState } from "react";
import IBeer from "../interfaces/IBeer";
import { BASE_URL } from "./AllBeerCard";
import randomBeers from "../assets/img/randombeer.png";

function RandomBeerCard() {
  const [randomBeer, setRandomBeer] = useState<IBeer>();

  const fetchRandomBeer = async () => {
    try {
      const response = await fetch(`${BASE_URL}/random`);
      const data = await response.json();
      setRandomBeer(data);
      console.log(data);
    } catch (err) {
      console.error("Error while fetching random beer:", err);
    }
  };

  return (
    <div>
      <div className="start">
        <div className="emotion-image">
          <img src={randomBeers} alt="pints of beers" className="image" />
          <button onClick={fetchRandomBeer}>Random Beer</button>
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
      {randomBeer && (
        <div className="beer-card">
          <img
            src={randomBeer.image_url}
            alt={randomBeer.name}
            className="detail-image"
          />
          <div className="beer-details">
            <h2>{randomBeer.name}</h2>
            <h3>{randomBeer.tagline}</h3>
            <p>{randomBeer.contributed_by}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomBeerCard;

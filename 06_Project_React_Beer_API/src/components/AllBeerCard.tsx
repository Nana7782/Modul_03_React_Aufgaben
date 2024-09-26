import { useState } from "react";
import IBeer from "../interfaces/IBeer";
import allbeers from "../assets/img/allbeers.jpg";

export const BASE_URL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeerCard() {
  const [beers, setBeers] = useState<IBeer[]>([]);

  const fetchBeers = async () => {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setBeers(data);
    } catch (err) {
      console.error("Error while fetching all beers:", err);
    }
  };
  return (
    <div>
      <div className="start">
        <div className="emotion-image">
          <img src={allbeers} alt="loads of beers" className="image" />
          <button onClick={fetchBeers}>All Beers</button>
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

      {beers.map((beer) => (
        <div key={beer._id} className="beer-card">
          <img src={beer.image_url} alt={beer.name} className="detail-image" />
          <div className="beer-details">
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <p>{beer.contributed_by}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllBeerCard;

import { useEffect, useState } from "react";
import IBeer from "../interfaces/IBeer";
import { Link, useParams } from "react-router-dom";

export default function BeerDetail() {
  const [beer, setBeer] = useState<IBeer>();
  const { id } = useParams();
  const BASE_URL = `https://ih-beers-api2.herokuapp.com/beers/${id}`;

  useEffect(() => {
    fetch(BASE_URL).then((response) =>
      response.json().then((data) => setBeer(data))
    );
  }, []);

  return (
    <div>
      <img src={beer?.image_url} alt={beer?.name} />{" "}
      <div>
        <h2>{beer?.name}</h2>
        <b>{beer?.tagline}</b>
        <div>
          <p>First brewed:</p>
          <p>{beer?.firstBrewed}</p>
        </div>
        <div>
          <p>Attenuation Level:</p>
          <p>{beer?.attenuationLevel}</p>
        </div>
        <p>{beer?.description}</p>
        <Link to="/beers/all">
          <img src="/src/assets/img/Back.svg" alt="back" />
        </Link>
      </div>
    </div>
  );
}

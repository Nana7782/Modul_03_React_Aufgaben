import IBeer from "../interfaces/IBeer";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { useQuery } from "@tanstack/react-query";

export default function BeerDetail() {
  const { id } = useParams();
  const BASE_URL = `https://ih-beers-api2.herokuapp.com/beers/${id}`;

  const getBeerById = async () => {
    const resp = await fetch(BASE_URL);
    const data = await resp.json();
    return data;
  };

  const beer = useQuery<IBeer>({
    queryKey: ["beer", id],
    queryFn: () => getBeerById(),
  });

  return (
    <div className="main-container">
      <div className="detail-container">
        <img
          src={beer.data?.image_url}
          alt={beer.data?.name}
          className="detail-image"
        />
        <div>
          <h2>{beer.data?.name}</h2>
          <h3>{beer.data?.tagline}</h3>
          <div className="brewdetail">
            <p>First brewed:</p>
            <p>{beer.data?.firstBrewed}</p>
          </div>
          <div className="brewdetail">
            <p>Attenuation Level:</p>
            <p>{beer.data?.attenuationLevel}</p>
          </div>
          <p className="description">{beer.data?.description}</p>
          <Link to="/beers/all">
            <img src="/src/assets/img/Back.svg" alt="back" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

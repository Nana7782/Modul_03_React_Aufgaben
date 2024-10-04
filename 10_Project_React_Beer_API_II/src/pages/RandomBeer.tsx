import IBeer from "../interfaces/IBeer";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "./AllBeers";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

export default function RandomBeer() {
  const fetchRandomBeer = async () => {
    const resp = await fetch(`${BASE_URL}/random`);
    const data = await resp.json();
    return data;
  };

  const beerQuery = useQuery<IBeer>({
    queryKey: ["randomBeer"],
    queryFn: () => fetchRandomBeer(),
  });
  if (beerQuery.isError) {
    return "Sorry, no beers to show";
  }
  if (beerQuery.isPending) {
    return "Loading beers...";
  }

  return (
    <div className="main-container">
      {beerQuery && (
        <div className="beer-card">
          <img
            src={beerQuery.data.image_url}
            alt={beerQuery.data.name}
            className="detail-image"
          />
          <div className="beer-details">
            <h2>{beerQuery.data.name}</h2>
            <h3>{beerQuery.data.tagline}</h3>
            <p>{beerQuery.data.contributed_by}</p>
            <NavLink
              to={"/beers/" + beerQuery.data._id}
              className="detail-button"
            >
              Details
            </NavLink>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

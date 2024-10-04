import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import IBeer from "../interfaces/IBeer";
import { useQuery } from "@tanstack/react-query";

export const BASE_URL = "https://ih-beers-api2.herokuapp.com/beers";

export default function AllBeers() {
  const fetchAllBeers = async () => {
    const resp = await fetch(BASE_URL);
    const data = await resp.json();
    return data;
  };

  const beerQuery = useQuery<IBeer[]>({
    queryKey: ["beers"],
    queryFn: () => fetchAllBeers(),
  });
  if (beerQuery.isError) {
    return "Sorry, no beers to show";
  }
  if (beerQuery.isPending) {
    return "Loading beers...";
  }

  return (
    <div className="main-container">
      {beerQuery.data.map((beer) => (
        <div key={beer._id} className="beer-card">
          <img src={beer.image_url} alt={beer.name} className="detail-image" />
          <div className="beer-details">
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <p>{beer.contributed_by}</p>
            <NavLink to={"/beers/" + beer._id} className="detail-button">
              Details
            </NavLink>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}

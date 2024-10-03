import IBeer from "../interfaces/IBeer";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "./AllBeers";
import Footer from "../components/Footer";

export default function RandomBeer() {
  const fetchRandomBeer = async () => {
    const resp = await fetch(`${BASE_URL}/random`);
    const data = await resp.json();
    return data;
  };

  const randomBeerQuery = useQuery<IBeer>({
    queryKey: ["randomBeer"],
    queryFn: () => fetchRandomBeer(),
  });
  if (randomBeerQuery.isError) {
    return "Sorry, no beers to show";
  }
  if (randomBeerQuery.isPending) {
    return "Loading beers...";
  }

  return (
    <div>
      {randomBeerQuery && (
        <div className="beer-card">
          <img
            src={randomBeerQuery.data.image_url}
            alt={randomBeerQuery.data.name}
            className="detail-image"
          />
          <div className="beer-details">
            <h2>{randomBeerQuery.data.name}</h2>
            <h3>{randomBeerQuery.data.tagline}</h3>
            <p>{randomBeerQuery.data.contributed_by}</p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

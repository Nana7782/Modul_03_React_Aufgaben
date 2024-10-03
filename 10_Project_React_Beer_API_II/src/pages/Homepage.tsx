import AllBeerCard from "../components/AllBeerCard";
import RandomBeerCard from "../components/RandomBeerCard";

export default function Homepage() {
  return (
    <div className="main-container">
      <AllBeerCard />
      <RandomBeerCard />
    </div>
  );
}

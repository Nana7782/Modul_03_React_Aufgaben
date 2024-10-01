import CarDetails from "../components/CarDetails";
import Cars from "../data/data.json";
import { Link } from "react-router-dom";

export default function Home() {
  const carsList = Cars;

  return (
    <div>
      <h1>SuperCarList</h1>
      <Link to={"/"}>Home</Link>
      <div className="grid">
        {carsList.map((car) => {
          return <CarDetails model={car.CarMake} />;
        })}
      </div>
    </div>
  );
}

import { useParams } from "react-router-dom";
import Cars from "../data/data.json";

function getCar(brand: string) {
  return Cars.find((car) => car.CarMake.toUpperCase() === brand.toUpperCase());
}

export default function Car() {
  const { car } = useParams();

  const singleCar = getCar(car!);

  if (!singleCar) {
    return "Ooopsies";
  }

  return (
    <>
      <h2>{singleCar.CarMake}</h2>
      <h3>{singleCar.carModel}</h3>
      <h4>{singleCar.CarYear}</h4>
    </>
  );
}

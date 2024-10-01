import { Link } from "react-router-dom";

interface CarProps {
  model: string;
}

export default function CarDetails(props: CarProps) {
  return (
    <div>
      <h2>{props.model}</h2>
      <Link to={`${props.model}`}>Read More</Link>
    </div>
  );
}

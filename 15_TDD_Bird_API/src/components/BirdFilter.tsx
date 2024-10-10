import BirdCard from "./BirdCard";
import type { Bird } from "../data/birds";
import { useState } from "react";
import { filterByWingspan } from "../lib/filterByWingspan";

interface BirdListProps {
  birds: Bird[];
}

export default function BirdFilter({ birds }: BirdListProps) {
  const [maxWingspan, setMaxWingspan] = useState("");

  //   console.log(filterByWingspan(birds, 50));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxWingspan(e.target.value);
  };
  const maxWingspanNumber = parseInt(maxWingspan);
  const filteredBirds = isNaN(maxWingspanNumber)
    ? birds
    : filterByWingspan(birds, maxWingspanNumber);

  return (
    <div>
      <label htmlFor="filterInput">Vögel nach Flügelspannweite filtern</label>
      <input
        type="number"
        id="filterInput"
        name="filterWingspan"
        onChange={handleChange}
      />

      <div>
        {filteredBirds.map((bird) => (
          <BirdCard bird={bird} />
        ))}
      </div>
    </div>
  );
}

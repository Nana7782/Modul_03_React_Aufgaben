import { useEffect, useState } from "react";
import type { Bird } from "./data/birds";
import BirdList from "./components/BirdList";
import BirdFilter from "./components/BirdFilter";

function App() {
  const [birds, setBirds] = useState<Bird[]>([]);
  useEffect(() => {
    async function getBirds() {
      try {
        const response = await fetch(
          "https://stefanscoolevogelapi.com/api/birds"
        );
        const json = await response.json();
        setBirds(json);
      } catch (err) {
        console.error(err);
      }
    }
    getBirds();
  }, []);

  return (
    <>
      <h1>Voegel</h1>
      <BirdFilter birds={birds} />
      {/* <BirdList birds={birds} /> */}
    </>
  );
}

export default App;

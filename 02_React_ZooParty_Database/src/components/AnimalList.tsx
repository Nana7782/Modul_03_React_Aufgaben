import AnimalCard from "./AnimalCard";
import animals from "../data/data";

function AnimalList() {
  return (
    <div id="animal-container">
      {animals.map((animal) => (
        <AnimalCard
          key={animal.name}
          name={animal.name}
          species={animal.species}
          habitat={animal.habitat}
          lifespan={animal.lifespan}
          diet={animal.diet}
          funFacts={animal.funFacts}
          emoji={animal.emoji}
        />
      ))}
    </div>
  );
}

export default AnimalList;

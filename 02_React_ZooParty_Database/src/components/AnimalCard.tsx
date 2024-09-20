interface AnimalProps {
  name: string;
  species: string;
  habitat: string;
  lifespan: number;
  diet: string;
  funFacts: string[];
  emoji: string;
}

function AnimalCard(props: AnimalProps) {
  return (
    <div id="animal-card">
      <div className="emoji">{props.emoji}</div>
      <h2>{props.name}</h2>
      <div className="bold-text">{props.species}</div>
      <div className="bold-text">{props.habitat}</div>
      <div className="bold-text">{props.diet}</div>
      <div className="text">{props.lifespan} years</div>
      <ul>
        {props.funFacts.map((fact) => (
          <li className="text">{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default AnimalCard;

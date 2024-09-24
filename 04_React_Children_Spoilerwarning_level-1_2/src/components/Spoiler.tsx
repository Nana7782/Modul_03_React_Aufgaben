import { useState } from "react";

interface SpoilerProps {
  children: React.ReactNode;
}

function Spoiler({ children }: SpoilerProps) {
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    if (!revealed) {
      setRevealed(true);
    }
  };

  return (
    <div
      className={`spoiler ${revealed ? "revealed" : ""}`}
      onClick={handleClick}
    >
      {revealed ? children : <span className="placeholder">[.......]</span>}
    </div>
  );
}

export default Spoiler;

// ! leider bekomme ich es nicht hin, dass der Spoiler genauso groß ist wie der verdeckte Text :(

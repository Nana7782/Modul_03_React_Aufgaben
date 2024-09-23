import { useState } from "react";

function Toggle() {
  const [invert, setInverted] = useState(true);

  const handleInvertClick = () => {
    setInverted(!invert);
  };

  return (
    <div id="container" className={invert ? "night" : "day"}>
      <h1 className={invert ? "night-text" : "day-text"}>
        {invert ? "Night" : "Day"}
      </h1>
      <button
        className={invert ? "night-button" : "day-button"}
        onClick={handleInvertClick}
      >
        Change to {invert ? "Day" : "Night"}
      </button>
    </div>
  );
}

export default Toggle;

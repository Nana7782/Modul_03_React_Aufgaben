import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleCountClick = (increment: number) => {
    setCount((count) => count + increment);
  };
  return (
    <div id="count-container">
      <button onClick={() => handleCountClick(1)}>+ 1</button>
      <div>{count}</div>
      <button onClick={() => handleCountClick(-1)}>- 1</button>
    </div>
  );
}

export default Counter;

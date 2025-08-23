import React, { useState } from "react";
function Counter() {
  const [Count, setCount] = useState(0);

  const Add = () => {
    setCount(Count + 1);
  };
  const Minus = () => {
    setCount(Count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <div className="Counter-main-div">
        <div className="Counter-viewer">
          <h1>{Count}</h1>
        </div>
        <div className="Buttons">
          <button onClick={Add}>Add +1 </button>
          <button onClick={Minus}>Minus -1</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
}
export default Counter;

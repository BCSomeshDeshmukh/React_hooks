import React, { useState } from "react";
import "./style1.css";
function HookCounter2() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      
      setCount((preCount) => preCount + 1);
    }
  };
  return (
    <div className="box">
      <p>Count: {count}</p>
      <div className="buttons">
        {/*increment  */}
        <button onClick={() => setCount((preCount) => preCount + 1)}>
          Increment
        </button>
        {/* reset */}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        {/* decrement */}
        <button onClick={() => setCount((preCount) => preCount - 1)}>
          Decrement
        </button>

        {/* increment by 5 */}
        <button onClick={incrementFive}>Increment 5</button>
      </div>
    </div>
  );
}

export default HookCounter2;

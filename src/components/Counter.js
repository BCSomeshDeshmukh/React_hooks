import React, { useState,useMemo } from "react";
function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  useMemo()
  const isEven = ()=>{
    let i=0;
    while(i < 2000000000) i++
    return counterOne % 2 ===0;
  }
  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven() ? "Even": "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
      </div>
    </div>
  );
}

export default Counter;

// when you want to cahce a function use Callback() hook and when you want to pass the result of the invoked fuction make use of the useMemo() function

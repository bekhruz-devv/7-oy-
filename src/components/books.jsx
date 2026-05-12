import React from "react";
import { useCounter } from "../hooks/useCounter";

const Books = () => {
  const [count, increment, decrement] = useCounter(0);
  return (
    <div>
      <span>{count}</span>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Books;

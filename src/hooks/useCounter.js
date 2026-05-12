import { useState } from "react";

export const useCounter = (state) => {
  const [count, setCount] = useState(state);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return [count, increment, decrement];
};

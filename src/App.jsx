import { useState } from "react";
import { useCounter } from "./hooks/useCounter";
import Books from "./components/books";
import Todos from "./components/todos";

function App() {
  const [count, increment, decrement] = useCounter(0);

  return (
    <>
      <Todos />
    </>
  );
}

export default App;

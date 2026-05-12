import axios from "axios";
import { useState } from "react";
export const useFetchTodos = () => {
  const [todos, setTodos] = useState(null);
  const fetchTodos = async () => {
    const todos = await axios.get("http://localhost:5000/todos");
    setTodos(todos);
  };
  return [todos, fetchTodos];
};

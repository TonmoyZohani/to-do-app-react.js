import React, { useState, useEffect } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import { FaAngleDoubleRight } from "react-icons/fa";
import { AiFillDelete } from "react-icons/fa";
import "./form.css";

const data = [
  {
    id: 1,
    item: "Cricket",
  },
  {
    id: 2,
    item: "Football",
  },
  {
    id: 3,
    item: "Hockey",
  },
];

function App() {
  const [todos, setTodos] = useState(data);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    console.log(todos);
  };

  const removeTodo = (id) => {
    const newItems = todos.filter((todo) => id !== todo.id);
    setTodos(newItems);
  };

  // const removeTodo = (id) => {
  //   const todosCopy = [...todos];
  //   todosCopy.splice(id, 1);
  //   setTodos(todosCopy);
  // };

  return (
    <div className="form-container">
      <h3>To-Do App</h3>
      <div className="input-field">
        <Form addTodo={addTodo} />
      </div>
      <div className="items">
        <TodoList todos={todos} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;

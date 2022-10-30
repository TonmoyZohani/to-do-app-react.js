import React from "react";
import ListItem from "./ListItem";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return <ListItem key={todo.id} {...todo} removeTodo={removeTodo} />;
      })}
    </div>
  );
};

export default TodoList;

import React from "react";

const ListItem = ({ id, item, removeTodo }) => {
  console.log(item);
  return (
    <div className="single-list">
      <p className="text-item">{item}</p>
      <button className="delete" onClick={() => removeTodo(id)}>
       x
      </button>
    </div>
  );
};

export default ListItem;

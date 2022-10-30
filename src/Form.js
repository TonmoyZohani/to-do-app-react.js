import React, { useState } from "react";
import "./form.css";

const Form = ({ addTodo }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(text);
    let id = Math.floor(Math.random() * 100);
    console.log(id);
    // let i = {
    //   id: id,
    //   item: text,
    // };
    addTodo({ id, item });
    setItem("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="text-field"
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <input className="submit-btn" type="submit" value="Add" />
    </form>
  );
};

export default Form;

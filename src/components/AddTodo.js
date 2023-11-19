import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="main-form"
    >
      <input
        type="text"
        placeholder="Add a task..."
        required
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full text-white bg-transparent focus:outline-none"
      />
      <button type="submit" className="bg-green-500 py-2 px-4 rounded-md">
        Add
      </button>
    </form>
  );
};

export default AddTodo;

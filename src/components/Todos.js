import React, { useState } from "react";
import trash from "../assets/trash-10-48.ico";
import edit from "../assets/pencil_182976.png";
import { useSelector } from "react-redux";
import { removeTodo, editTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const [removeId, setremoveId] = useState("");
  const [editId, setEditId] = useState("");
  const [editText, setEditText] = useState("");
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = useState(false);
  const clickHandler = (e) => {
    setremoveId(e.target.parentElement.id);
    dispatch(removeTodo(removeId));
  };
  const editSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      editTodo({
        id: editId,
        text: editText,
      })
    );
    setEditText("");
    setShowEdit(false);
  };
  const getEditId = (e) => {
    setEditId(e.target.parentElement.id);
    setShowEdit(true);
  };
  return (
    <div className="mt-8 p-4 bg-[#202123] rounded-md text-white tasks">
      {!todos.length && (
        <div className="text-center text-[#aaa]"> No Tasks</div>
      )}
      {todos.map((item) => (
        <div
          id={item.id}
          key={item.id}
          className="flex items-center justify-between capitalize p-2 bg-[#333] rounded-md"
        >
          <p className="w-[80%]  break-words "> {item.text}</p>
          <img
            src={edit}
            width={20}
            className="mr-0 md:-mr-20 cursor-pointer"
            alt="edit"
            onClick={getEditId}
          />
          {showEdit && (
            <form className="edit-form z-10" onSubmit={editSubmitHandler}>
              <h2 className="mb-4 text-black font-semibold text-center">Update Your Task</h2>
              <input
                className="w-full mb-4 p-2 text-black bg-[#ddd] focus:outline-none rounded-md"
                type="text"
                required
                placeholder="add something"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button
                className="mx-auto py-2 px-4 bg-blue-700 text-white block rounded-md"
                type="submit"
              >
                Save Updates
              </button>
              <span className="edit-close" onClick={() => setShowEdit(false)}>
                X
              </span>
            </form>
          )}
          <img
            src={trash}
            alt="trash"
            width={20}
            className="cursor-pointer"
            onClick={clickHandler}
          />
        </div>
      ))}
    </div>
  );
};

export default Todos;

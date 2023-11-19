import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.todos.forEach((e) => {
        if (e.id === action.payload.id) {
          e.text = action.payload.text;
        }
      });
    },
  },
});

//Export them as actions

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
// to make it wire with the store
export default todoSlice.reducer;

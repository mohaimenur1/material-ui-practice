import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../slices/todoSlice/todoSlice";

export const store = configureStore({
  reducer: {
    todos: TodoReducer,
  },
});

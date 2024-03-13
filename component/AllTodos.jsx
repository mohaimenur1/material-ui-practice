"use client";
import React from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import { Provider } from "react-redux";
import { store } from "@/app/store/store";

const AllTodos = () => {
  return (
    <Provider store={store}>
      <AddTodo />
      <Todo />
    </Provider>
  );
};

export default AllTodos;

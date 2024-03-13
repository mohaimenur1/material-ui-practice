import { removeTodo } from "@/app/slices/todoSlice/todoSlice";
import { Box, Button, ButtonBase } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
const Todo = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  // const removeItem = (id) => {
  //   dispatch(removeTodo(id));
  //   console.log("nano id of todo: ", id);
  // };

  return (
    <div>
      <ul sx={{ display: "flex", alignItems: "center" }}>
        {todos.map((todo) => (
          <div key={uuidv4()}>
            <li>{todo.text}</li>
            <Button onClick={() => dispatch(removeTodo(todo.id))}>X</Button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

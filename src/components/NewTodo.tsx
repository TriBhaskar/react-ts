import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value; // Non-null assertion operator
    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };
  return (
    <form action="" onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};
export default NewTodo;

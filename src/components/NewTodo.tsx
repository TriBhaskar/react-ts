import React, { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value; // Non-null assertion operator
    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }
    console.log(enteredText);
    props.onAddTodo(enteredText);
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

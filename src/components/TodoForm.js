import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import UseInputValue from "./UseInputValue";

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = UseInputValue("");
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          margin="normal"
          label="Add New Todo"
          value={value}
          onChange={handleChange}
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;

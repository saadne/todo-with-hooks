import React from "react";
import TextField from "@material-ui/core/TextField";
import UseInputValue from "./UseInputValue";
function EditTodo({ editTodo, id, task, toggle }) {
  const [value, handleChange, reset] = UseInputValue(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggle();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        margin="normal"
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodo;

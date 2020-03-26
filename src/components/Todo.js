import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/Iconbutton";
import DeleteIcon from "@material-ui/icons/Delete";
import UseToggle from "./UseToggle";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import EditTodo from "./EditTodo";
function Todo({ id, task, completed, removeTodo, toogleTodo, editTodo }) {
  const [isEditing, toggle] = UseToggle(false);
  return (
    <ListItem>
      {isEditing ? (
        <EditTodo editTodo={editTodo} id={id} task={task} toggle={toggle} />
      ) : (
        <>
          <Checkbox
            onClick={() => toogleTodo(id)}
            tabIndex={-1}
            checked={completed}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>

          <IconButton
            style={{ color: "green" }}
            aria-label="Edit"
            onClick={toggle}
          >
            <EditIcon />
          </IconButton>
          <IconButton style={{ color: "red" }}>
            <DeleteIcon aria-label="Delete" onClick={() => removeTodo(id)} />
          </IconButton>
        </>
      )}
    </ListItem>
  );
}

export default Todo;

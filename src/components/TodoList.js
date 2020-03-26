import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Todo from "./Todo";
function TodoList({ todos, removeTodo, toogleTodo, editTodo }) {
  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <ListItem>
                <ListItemText>
                  <Todo
                    id={todo.id}
                    task={todo.task}
                    key={todo.id}
                    completed={todo.completed}
                    removeTodo={removeTodo}
                    toogleTodo={toogleTodo}
                    editTodo={editTodo}
                  />
                </ListItemText>
              </ListItem>
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  } else {
    return null;
  }
}

export default TodoList;

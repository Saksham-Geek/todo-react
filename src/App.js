import React, { useReducer, useState } from "react";
import todoReducer from "./reducer";

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch({ type: "ADD_TODO", payload: todoText });
      setTodoText("");
    }
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "lightgreen",
      }}
    >
      <h1>Todo App</h1>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter a todo"
        style={{ fontSize: "18px" }}
      />
      <button
        style={{
          margin: "20px",
          fontSize: "1.2rem",
          padding: "4px 32px",
          backgroundColor: "lightsalmon",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={handleAddTodo}
      >
        Add
      </button>
      <ol
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignContent: "space-around",
          alignItems: "space-between",
        }}
      >
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              backgroundColor: "lightBlue",
              // width: "maxContent",
              margin: "10px",
              padding: "10px",
            }}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.text}
            <button
              style={{ margin: "10px" }}
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;

import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
      <Filter />
    </div>
  );
}

export default App;

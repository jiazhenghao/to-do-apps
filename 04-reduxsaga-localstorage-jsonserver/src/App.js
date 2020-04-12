import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="item-a">
        <AddTodo />
        <TodoList />
        <Filter />
      </div>
    </div>
  );
}

export default App;

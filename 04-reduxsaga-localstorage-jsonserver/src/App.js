import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App__nav">
        <Nav />
      </div>
      <div className="APP__todo">
        {/* <div className="item-a"> */}
        <AddTodo />
        <TodoList />
        <Filter />
      </div>
    </div>
  );
}

export default App;

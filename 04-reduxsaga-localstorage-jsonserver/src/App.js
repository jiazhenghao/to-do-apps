import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App__nav">
          <Nav />
        </div>
        <Switch>
          <Route exact path="/">
            <div className="APP__todo">
              <AddTodo />
              <TodoList />
              <Filter />
            </div>
            <div className="APP__sidebar">
              <Sidebar />
            </div>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

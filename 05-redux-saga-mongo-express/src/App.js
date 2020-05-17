import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./redux/history";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <Router history={history}>
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
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/index">
            <div className="APP__todo">
              <AddTodo />
              <TodoList />
              <Filter />
            </div>
            <div className="APP__sidebar">
              <Sidebar />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

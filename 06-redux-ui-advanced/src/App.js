import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./redux/history";
// import { Redirect } from "react-router";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App({ authenticated }) {
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
        </Switch>
      </div>
    </Router>
  );
}

App.propTypes = {
  authenticated: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    authenticated: state.authenticated,
  };
}

export default connect(mapStateToProps, null)(App);

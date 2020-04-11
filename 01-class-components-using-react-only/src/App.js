import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.changeActive = this.changeActive.bind(this);
    this.toggleListItemState = this.toggleListItemState.bind(this);
    this.state = {
      lists: [
        ["learn C#", 1],
        ["learn Java", 0],
        ["learn Python", 1],
        ["learn C++", 0],
        ["learn how to live under shit mountain", 1],
        ["win the war against 4 spaces", 1],
      ],
      show: "All",
    };
  }

  handleAddTodo(value) {
    this.setState({ lists: [...this.state.lists, [value, 1]] });
  }

  changeActive(value) {
    this.setState({ show: value });
  }

  toggleListItemState(newState) {
    this.setState({ lists: newState });
  }

  render() {
    const lists = this.state.lists;
    const show = this.state.show;
    const addTodo = this.handleAddTodo;
    const changeActive = this.changeActive;
    const toggle = this.toggleListItemState;
    return (
      <div className="App">
        <AddTodo addTodo={addTodo} />
        <TodoList lists={lists} show={show} toggle={toggle} />
        <Filter show={show} changeActive={changeActive} />
      </div>
    );
  }
}

export default App;

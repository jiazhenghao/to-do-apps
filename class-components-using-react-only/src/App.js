import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.state = {
      lists: ["learn C#", "learn Java", "learn Python", "learn C++"],
    };
  }
  handleAddTodo(value) {
    const aaa = [...this.state.lists, value];
    console.log(aaa);
    this.setState({ lists: [...this.state.lists, value] });
  }
  render() {
    const lists = this.state.lists;
    const addTodo = this.handleAddTodo;
    return (
      <div className="App">
        <AddTodo addTodo={addTodo} />
        <TodoList lists={lists} />
        <Filter />
      </div>
    );
  }
}

export default App;

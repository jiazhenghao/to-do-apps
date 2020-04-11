import React from "react";

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    this.props.addTodo(this.state.value);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="AddTodo">
        <input
          type="text"
          placeholder="Add New Things To Do"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

import React from "react";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    //this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="TodoList">
        {this.props.lists.map((ele, index) => (
          <div key={ele.toString()}>
            <h1>
              {index + 1}: {ele}
            </h1>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

import React from "react";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // this.props.addTodo(this.state.value);
    // console.log(event.target.firstChild.data);
    this.props.changeActive(event.target.firstChild.data);
  }

  render() {
    const active = this.props.show;
    const buttonArray = ["All", "Active", "Completed"];
    return (
      <div className="Filter">
        <span className="label">Show:</span>
        {buttonArray.map((ele) => {
          return ele === active ? (
            <button
              className="btn btn-large active"
              key={ele.toString()}
              onClick={this.handleClick}
            >
              {ele}
            </button>
          ) : (
            <button
              className="btn btn-large"
              key={ele.toString()}
              onClick={this.handleClick}
            >
              {ele}
            </button>
          );
        })}
        {/* <button className="btn btn-large">All</button>
        <button className="btn btn-large">Active</button>
        <button className="btn btn-large">Completed</button> */}
      </div>
    );
  }
}

import React from "react";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <div className="Filter">
        <span className="label">Show:</span>
        <button className="btn btn-large">All</button>
        <button className="btn btn-large">Active</button>
        <button className="btn btn-large">Completed</button>
      </div>
    );
  }
}

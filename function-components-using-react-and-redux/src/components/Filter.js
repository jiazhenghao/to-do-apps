import React from "react";

function Filter() {
  //   const active = this.props.show;
  //   const buttonArray = ["All", "Active", "Completed"];
  return (
    <div className="Filter">
      <button className="btn btn-large">All</button>
      <button className="btn btn-large">Active</button>
      <button className="btn btn-large">Completed</button>
    </div>
  );
}

export default Filter;

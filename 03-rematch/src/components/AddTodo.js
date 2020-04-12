import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function AddTodo({ addOneItem }) {
  function handleClick(event) {
    //do not add empty string to the lists
    const newValue = event.target.parentElement.firstChild.value;
    if (newValue === "") return;
    //clear the input everytime add button is clicked
    else event.target.parentElement.firstChild.value = "";
    addOneItem(newValue);
  }

  return (
    <div className="AddTodo">
      <input type="text" placeholder="Add New Things To Do" />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

AddTodo.propTypes = {
  addOneItem: PropTypes.func.isRequired,
};

const mapDispatch = (dispatch) => ({
  addOneItem: dispatch.lists.addOneItem,
});

export default connect(null, mapDispatch)(AddTodo);

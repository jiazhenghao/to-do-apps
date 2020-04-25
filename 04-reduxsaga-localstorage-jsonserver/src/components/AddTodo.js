import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addOneItem, changeFilterValue } from "../redux/actions/addTodoActions";

function AddTodo({ addOneItem, changeFilterValue }) {
  // setup a timer
  let timeout;
  let val;

  function handleChange(event) {
    // If timer is null, reset it to 1000ms
    // Otherwise, wait until timer is cleared
    val = event.target.value;
    if (!timeout) {
      timeout = setTimeout(function () {
        // Reset timeout
        timeout = null;
        changeFilterValue(val);
      }, 1000);
    }
  }

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
      <input
        type="text"
        placeholder="Add New Things To Do"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

AddTodo.propTypes = {
  addOneItem: PropTypes.func.isRequired,
  changeFilterValue: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  addOneItem,
  changeFilterValue,
};

export default connect(null, mapDispatchToProps)(AddTodo);

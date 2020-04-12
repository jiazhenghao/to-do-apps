import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addOneItem } from "../redux/actions/addTodoActions";

function AddTodo({ addOneItem }) {
  function handleClick(event) {
    // addOneItem(event.target.parentElement.firstChild.value);
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

const mapDispatchToProps = {
  addOneItem,
};

export default connect(null, mapDispatchToProps)(AddTodo);

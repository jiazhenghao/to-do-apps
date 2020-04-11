import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addOneItem } from "../redux/actions/addTodoActions";

function AddTodo({ addOneItem }) {
  function handleClick(event) {
    addOneItem(event.target.parentElement.firstChild.value);
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

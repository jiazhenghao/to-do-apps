import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addOneItem, changeFilterValue } from "../redux/actions/addTodoActions";
import { english, chinese } from "../languages";

function AddTodo({ addOneItem, changeFilterValue, language }) {
  // setup a timer
  let timeout, val, buttonAdd, placeHolder;
  switch (language) {
    case 0:
      buttonAdd = english.buttonAdd;
      placeHolder = english.placeHolder;
      break;
    case 1:
      buttonAdd = chinese.buttonAdd;
      placeHolder = chinese.placeHolder;
      break;
    default:
      buttonAdd = english.buttonAdd;
      placeHolder = english.placeHolder;
  }

  function handleChange(event) {
    // If timer is null, reset it to 500ms
    // Otherwise, wait until timer is cleared
    val = event.target.value;
    if (!timeout) {
      timeout = setTimeout(function () {
        // Reset timeout
        timeout = null;
        changeFilterValue(val);
      }, 500);
    }
  }

  function handleClick(event) {
    // avoid quick click after some typing
    clearTimeout(timeout);
    timeout = null;
    //do not add empty string to the lists
    const newValue = event.target.parentElement.firstChild.value;
    if (newValue === "") return;
    //clear the input everytime add button is clicked
    else event.target.parentElement.firstChild.value = "";
    addOneItem(newValue);
  }

  return (
    <div className="AddTodo">
      <input type="text" placeholder={placeHolder} onChange={handleChange} />
      <button onClick={handleClick}>{buttonAdd}</button>
    </div>
  );
}

AddTodo.propTypes = {
  addOneItem: PropTypes.func.isRequired,
  changeFilterValue: PropTypes.func.isRequired,
  language: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    language: state.language,
  };
}

const mapDispatchToProps = {
  addOneItem,
  changeFilterValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggle, deleteOneItem } from "../redux/actions/todoListActions";
import { useAlert } from "react-alert";
import { english, chinese } from "../languages";

function TodoList({
  show,
  lists,
  toggle,
  deleteOneItem,
  filterValue,
  language,
}) {
  let newLists = [];
  const alert = useAlert();
  let alertMessage;
  switch (language) {
    case 0:
      alertMessage = english.alertMessage;
      break;
    case 1:
      alertMessage = chinese.alertMessage;
      break;
    default:
      alertMessage = english.alertMessage;
  }

  function handleClick(event) {
    const index = event.target.innerText.split(":")[0] - 1;
    if (event.type === "click") {
      try {
        toggle(index);
      } catch (e) {
        console.log(e);
      }
    } else if (event.type === "contextmenu") {
      event.preventDefault();
      if (filterValue !== "") {
        alert.show(alertMessage, {
          timeout: 5000, // custom timeout just for this one alert
          type: "error",
        });
        return;
      }
      deleteOneItem(index);
      // event.target.parentElement.className += " hide";
      // setTimeout(() => {
      //   deleteOneItem(index);
      // }, 1000);
    }
  }

  if (filterValue !== "") {
    newLists = lists.map((ele) => {
      if (ele[0].indexOf(filterValue) !== -1) {
        return [...ele];
      } else {
        return [];
      }
    });
  } else {
    newLists = lists.map((ele) => [...ele]);
  }

  if (show === 0) {
    return (
      <div className="TodoList">
        {newLists.map((ele, index) => {
          if (ele.length === 0) {
            return null;
          }
          return ele[1] > 0 ? (
            <div
              key={ele.toString() + Math.random()}
              className="TodoList-div"
              onClick={handleClick}
              onContextMenu={handleClick}
            >
              <h1>
                {index + 1}: {ele[0]}
              </h1>
              <hr />
            </div>
          ) : (
            <div
              key={ele.toString() + Math.random()}
              className="TodoList-div"
              onClick={handleClick}
              onContextMenu={handleClick}
            >
              <h1 className="completed">
                {index + 1}: {ele[0]}
              </h1>
              <hr />
            </div>
          );
        })}
      </div>
    );
  } else if (show === 1) {
    return (
      <div className="TodoList">
        {newLists.map((ele, index) => {
          if (ele.length === 0) {
            return null;
          }
          return ele[1] > 0 ? (
            <div
              key={ele.toString() + Math.random()}
              className="TodoList-div"
              onClick={handleClick}
              onContextMenu={handleClick}
            >
              <h1>
                {index + 1}: {ele[0]}
              </h1>
              <hr />
            </div>
          ) : null;
        })}
      </div>
    );
  } else if (show === 2) {
    return (
      <div className="TodoList">
        {newLists.map((ele, index) => {
          if (ele.length === 0) {
            return null;
          }
          return ele[1] === 0 ? (
            <div
              key={ele.toString() + Math.random()}
              className="TodoList-div"
              onClick={handleClick}
              onContextMenu={handleClick}
            >
              <h1>
                {index + 1}: {ele[0]}
              </h1>
              <hr />
            </div>
          ) : null;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    show: state.show,
    lists: state.lists,
    filterValue: state.filterValue,
    language: state.language,
  };
}

const mapDispatchToProps = {
  toggle,
  deleteOneItem,
};

TodoList.propTypes = {
  show: PropTypes.number.isRequired,
  lists: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired,
  deleteOneItem: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
  language: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

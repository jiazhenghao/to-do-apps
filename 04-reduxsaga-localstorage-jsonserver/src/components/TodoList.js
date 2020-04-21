import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggle, deleteOneItem } from "../redux/actions/todoListActions";
import { useAlert } from "react-alert";

function TodoList({ show, lists, toggle, deleteOneItem, filterValue }) {
  let newLists = [];
  const alert = useAlert();

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
        //alert("You cannot delete item when you are searching one");
        alert.show("Not a good idea to delete one when searching", {
          timeout: 3000, // custom timeout just for this one alert
          type: "error",
        });
        // alert.show(<div style={{ color: "blue" }}>Some Message</div>);
        return;
      }
      event.target.parentElement.className += " hide";
      setTimeout(() => {
        deleteOneItem(index);
      }, 1000);
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

  if (show === "All") {
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
  } else if (show === "Active") {
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
  } else if (show === "Completed") {
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
  };
}

const mapDispatchToProps = {
  toggle,
  deleteOneItem,
};

TodoList.propTypes = {
  show: PropTypes.string.isRequired,
  lists: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired,
  deleteOneItem: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

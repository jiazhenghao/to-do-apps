import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function TodoList({ show, lists, toggle, deleteOneItem }) {
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
      event.target.parentElement.className += " hide";
      setTimeout(() => {
        deleteOneItem(index);
      }, 1000);
    }
  }

  if (show === "All") {
    return (
      <div className="TodoList">
        {lists.map((ele, index) => {
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
        {lists.map((ele, index) => {
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
        {lists.map((ele, index) => {
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

const mapState = (state) => ({
  show: state.show,
  lists: state.lists,
});

const mapDispatch = (dispatch) => ({
  toggle: dispatch.lists.toggle,
  deleteOneItem: dispatch.lists.deleteOneItem,
});

TodoList.propTypes = {
  show: PropTypes.string.isRequired,
  lists: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired,
  deleteOneItem: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(TodoList);

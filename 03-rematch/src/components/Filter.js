import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Filter({ show, changeShowStatus }) {
  const active = show;
  const buttonArray = ["All", "Active", "Completed"];

  function handleClick(event) {
    changeShowStatus(event.target.innerText);
  }

  return (
    <div className="Filter">
      {buttonArray.map((ele) => {
        return ele === active ? (
          <button
            className="btn btn-large active"
            key={ele.toString()}
            onClick={handleClick}
          >
            {ele}
          </button>
        ) : (
          <button
            className="btn btn-large"
            key={ele.toString()}
            onClick={handleClick}
          >
            {ele}
          </button>
        );
      })}
    </div>
  );
}

Filter.propTypes = {
  show: PropTypes.string.isRequired,
};

const mapState = (state) => ({
  show: state.show,
});

const mapDispatch = (dispatch) => ({
  changeShowStatus: dispatch.show.changeShowStatus,
});

export default connect(mapState, mapDispatch)(Filter);

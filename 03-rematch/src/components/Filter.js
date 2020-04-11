import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeShowStatus } from "../redux/actions/filter";

function Filter({ show, changeShowStatus }) {
  const active = show;
  const buttonArray = ["All", "Active", "Completed"];

  function handleClick(event) {
    changeShowStatus(event.target.innerText);
  }

  return (
    <div className="Filter">
      <span className="label">Show:</span>
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

function mapStateToProps(state) {
  return {
    show: state.show,
  };
}

const mapDispatchToProps = {
  changeShowStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

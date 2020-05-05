import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeShowStatus } from "../redux/actions/filterAction";
import languageArray from "../languages";

function Filter({ show, changeShowStatus, language }) {
  function handleClick(event) {
    changeShowStatus(event.target.getAttribute("indexd") * 1);
  }

  return (
    <div className="Filter">
      {languageArray[language].buttonArray.map((ele, index) => {
        return index === show ? (
          <button
            className="btn btn-large active"
            key={ele.toString()}
            onClick={handleClick}
            indexd={index}
          >
            {ele}
          </button>
        ) : (
          <button
            className="btn btn-large"
            key={ele.toString()}
            onClick={handleClick}
            indexd={index}
          >
            {ele}
          </button>
        );
      })}
    </div>
  );
}

Filter.propTypes = {
  show: PropTypes.number.isRequired,
  language: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    show: state.show,
    language: state.language,
  };
}

const mapDispatchToProps = {
  changeShowStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

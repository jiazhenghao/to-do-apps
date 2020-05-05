import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import languageArray from "../languages";

function Login({ language }) {
  return (
    <div className="App__login__form">
      <h1>{languageArray[language].login_h1}</h1>
      <form>
        <input
          type="text"
          placeholder={languageArray[language].login_input_username}
          name="username"
        />
        <input
          type="password"
          placeholder={languageArray[language].login_input_password}
          name="password"
        />
        <hr />
        {/* {authenticated === mutations.NOT_AUTHENTICATED ? (
          <p>Login incorrect</p>
        ) : null} */}
        <button type="submit">{languageArray[language].login_submit}</button>
      </form>
    </div>
  );
}

Login.propTypes = {
  language: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    language: state.language,
  };
}

export default connect(mapStateToProps, null)(Login);

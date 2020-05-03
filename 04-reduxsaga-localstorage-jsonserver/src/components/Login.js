import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { english, chinese } from "../languages";

function Login({ language }) {
  let login_h1, login_submit, login_input_username, login_input_password;
  switch (language) {
    case 0:
      login_h1 = english.login_h1;
      login_submit = english.login_submit;
      login_input_username = english.login_input_username;
      login_input_password = english.login_input_password;
      break;
    case 1:
      login_h1 = chinese.login_h1;
      login_submit = chinese.login_submit;
      login_input_username = chinese.login_input_username;
      login_input_password = chinese.login_input_password;
      break;
    default:
      login_h1 = english.login_h1;
      login_submit = english.login_submit;
      login_input_username = english.login_input_username;
      login_input_username = english.login_input_password;
  }

  return (
    <div className="App__login__form">
      <h1>{login_h1}</h1>
      <form>
        <input type="text" placeholder={login_input_username} name="username" />
        <input
          type="password"
          placeholder={login_input_password}
          name="password"
        />
        <hr />
        {/* {authenticated === mutations.NOT_AUTHENTICATED ? (
          <p>Login incorrect</p>
        ) : null} */}
        <button type="submit">{login_submit}</button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    language: state.language,
  };
}
Login.propTypes = {
  language: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Login);

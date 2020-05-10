import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { requestAuthenticateUser } from "../redux/actions/loginAction";
import languageArray from "../languages";

function Login({ language, requestAuthenticateUser }) {
  function onClick(event) {
    event.preventDefault();
    let username = event.target["username"].value;
    let password = event.target["password"].value;
    console.log(username, password);
    requestAuthenticateUser(username, password);
    // dispatch(mutations.requestAuthenticateUser(username, password));
  }

  return (
    <div className="App__login__form">
      <h1>{languageArray[language].login_h1}</h1>
      <form onSubmit={onClick}>
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

const mapDispatchToProps = {
  requestAuthenticateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

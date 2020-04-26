/* eslint-disable jsx-a11y/anchor-is-valid*/
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changeThemeColor } from "../redux/actions/nav";

function Nav({ isLocalStorageAvailable, changeThemeColor }) {
  function onChangeTheme(e) {
    e.preventDefault();
    const themeColor = e.target.innerText.toLowerCase();
    document.documentElement.setAttribute("theme", themeColor);
    if (isLocalStorageAvailable) {
      localStorage.setItem("theme-todoapp", themeColor);
    }
    changeThemeColor(themeColor);
  }

  return (
    <ul className="nav__ul">
      <li className="nav__ul__li">
        <a href="#" className="nav__ul__a">
          Pick Up Theme
        </a>
        <ul>
          <li>
            <a href="#" className="nav__ul__a" onClick={onChangeTheme}>
              Tomato
            </a>
          </li>
          <li>
            <a href="#" className="nav__ul__a" onClick={onChangeTheme}>
              LightSeaGreen
            </a>
          </li>
          <li>
            <a href="#" className="nav__ul__a" onClick={onChangeTheme}>
              Pink
            </a>
          </li>
          <li>
            <a href="#" className="nav__ul__a" onClick={onChangeTheme}>
              LightBlue
            </a>
          </li>
          <li>
            <a href="#" className="nav__ul__a" onClick={onChangeTheme}>
              Grass
            </a>
          </li>
          <li>
            <a href="#" className="nav__ul__a" onClick={onChangeTheme}>
              Laker
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#" className="nav__ul__a">
          Language
        </a>
        {/* <ul>
          <li>
            <a href="#" className="nav__ul__a" onClick={onChangeTheme}>
              Chinese
            </a>
          </li>
          <li>
            <a href="#" className="nav__ul__a" onClick={onChangeTheme}>
              English
            </a>
          </li>
        </ul> */}
      </li>
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    isLocalStorageAvailable: state.isLocalStorageAvailable,
  };
}

const mapDispatchToProps = {
  changeThemeColor,
};

Nav.propTypes = {
  isLocalStorageAvailable: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

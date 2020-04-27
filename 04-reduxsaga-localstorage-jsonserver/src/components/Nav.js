/* eslint-disable jsx-a11y/anchor-is-valid*/
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changeThemeColor, changeLanguage } from "../redux/actions/nav";
import { english, chinese } from "../languages";

function Nav({
  isLocalStorageAvailable,
  changeThemeColor,
  language,
  changeLanguage,
}) {
  let themeColors, themeHeader, lang, languages;
  switch (language) {
    case 0:
      themeColors = english.themeColors;
      themeHeader = english.themeHeader;
      lang = english.lang;
      languages = english.languages;
      break;
    case 1:
      themeColors = chinese.themeColors;
      themeHeader = chinese.themeHeader;
      lang = chinese.lang;
      languages = chinese.languages;
      break;
    default:
      themeColors = english.themeColors;
      themeHeader = english.themeHeader;
      lang = english.lang;
      languages = english.languages;
  }

  function onChangeTheme(e) {
    e.preventDefault();
    let themeColor = themeColors.indexOf(e.target.innerText);
    if (themeColor === -1) themeColor = 0;
    document.documentElement.setAttribute("theme", themeColor + "");
    if (isLocalStorageAvailable) {
      localStorage.setItem("theme-todoapp", themeColor);
    }
    changeThemeColor(themeColor);
  }

  function onChangeLang(e) {
    e.preventDefault();
    let languagePick = languages.indexOf(e.target.innerText);
    if (languagePick === -1) languagePick = 0;
    if (isLocalStorageAvailable) {
      localStorage.setItem("language", languagePick);
    }
    changeLanguage(languagePick);
  }

  return (
    <ul className="nav__ul">
      <li className="nav__ul__li">
        <a href="#" className="nav__ul__a">
          {themeHeader}
        </a>
        <ul>
          {themeColors.map((ele, index) => {
            return (
              <li key={index}>
                <a href="#" className="nav__ul__a" onClick={onChangeTheme}>
                  {ele}
                </a>
              </li>
            );
          })}
        </ul>
      </li>
      <li className="nav__ul__li">
        <a href="#" className="nav__ul__a">
          {lang}
        </a>
        <ul>
          {languages.map((ele, index) => {
            return (
              <li key={index}>
                <a href="#" className="nav__ul__a" onClick={onChangeLang}>
                  {ele}
                </a>
              </li>
            );
          })}
          {/* <li>
            <a href="#" className="nav__ul__a">
              Chinese
            </a>
          </li>
          <li>
            <a href="#" className="nav__ul__a">
              English
            </a>
          </li> */}
        </ul>
      </li>
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    isLocalStorageAvailable: state.isLocalStorageAvailable,
    language: state.language,
  };
}

const mapDispatchToProps = {
  changeThemeColor,
  changeLanguage,
};

Nav.propTypes = {
  isLocalStorageAvailable: PropTypes.bool.isRequired,
  language: PropTypes.number.isRequired,
  changeThemeColor: PropTypes.func.isRequired,
  changeLanguage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

/* eslint-disable jsx-a11y/anchor-is-valid*/
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeThemeColor, changeLanguage } from "../redux/actions/navAction";
import languageArray from "../languages";
import { Link, withRouter } from "react-router-dom";
import FileSaver from "file-saver";

function Nav({
  isLocalStorageAvailable,
  changeThemeColor,
  language,
  changeLanguage,
  // authenticated,
  // user,
}) {
  function onChangeTheme(e) {
    e.preventDefault();
    let themeColor = languageArray[language].themeColors.indexOf(
      e.target.innerText
    );
    if (themeColor === -1) themeColor = 0;
    document.documentElement.setAttribute("theme", themeColor + "");
    if (isLocalStorageAvailable) {
      localStorage.setItem("theme-todoapp", themeColor);
    }
    changeThemeColor(themeColor);
  }

  function onChangeLang(e) {
    e.preventDefault();
    let languagePick = languageArray[language].languages.indexOf(
      e.target.innerText
    );
    if (languagePick === -1) languagePick = 0;
    if (isLocalStorageAvailable) {
      localStorage.setItem("language", languagePick);
    }
    changeLanguage(languagePick);
  }

  function onExport() {
    // let array = [];
    // array.push(
    //   "theme-todoapp " + localStorage.getItem("theme-todoapp") + " \r\n"
    // );
    // array.push("language " + localStorage.getItem("language") + " \r\n");
    // array.push("lists " + localStorage.getItem("lists") + " \r\n");
    // array.push("deletedItems " + localStorage.getItem("deletedItems"));
    let obj = {};
    obj["theme-todoapp"] = localStorage.getItem("theme-todoapp");
    obj["language"] = localStorage.getItem("language");
    obj["lists"] = localStorage.getItem("lists");
    obj["deletedItems"] = localStorage.getItem("deletedItems");

    const blob = new Blob([JSON.stringify(obj)], {
      type: "text/plain;charset=utf-8",
    });
    const date = new Date();
    FileSaver.saveAs(blob, `导出记录${date.toLocaleDateString()}.js`);
  }

  return (
    <ul className="nav__ul">
      <li className="nav__ul__li">
        <a href="#" className="nav__ul__a">
          {languageArray[language].themeHeader}
        </a>
        <ul>
          {languageArray[language].themeColors.map((ele, index) => {
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
          {languageArray[language].lang}
        </a>
        <ul>
          {languageArray[language].languages.map((ele, index) => {
            return (
              <li key={index}>
                <a href="#" className="nav__ul__a" onClick={onChangeLang}>
                  {ele}
                </a>
              </li>
            );
          })}
        </ul>
      </li>
      <li>
        <Link
          className="nav__ul__li nav__ul__a"
          to="/import"
          style={{ textDecoration: "none" }}
        >
          {languageArray[language].import}
        </Link>
      </li>
      <li className="nav__ul__li">
        <a href="#" className="nav__ul__a" onClick={onExport}>
          {languageArray[language].export}
        </a>
      </li>
      <li>
        <Link
          className="nav__ul__li nav__ul__a"
          to="/"
          style={{ textDecoration: "none" }}
        >
          {languageArray[language].home}
        </Link>
      </li>
    </ul>
  );
}

Nav.propTypes = {
  isLocalStorageAvailable: PropTypes.bool.isRequired,
  language: PropTypes.number.isRequired,
  changeThemeColor: PropTypes.func.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  authenticated: PropTypes.string.isRequired,
  user: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    isLocalStorageAvailable: state.isLocalStorageAvailable,
    language: state.language,
    authenticated: state.authenticated,
    user: state.user,
  };
}

const mapDispatchToProps = {
  changeThemeColor,
  changeLanguage,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));

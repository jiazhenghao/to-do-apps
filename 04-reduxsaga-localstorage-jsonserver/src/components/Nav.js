/* eslint-disable jsx-a11y/anchor-is-valid*/
import React from "react";

function Nav() {
  function onChangeTheme(e) {
    e.preventDefault();
    document.documentElement.setAttribute(
      "theme",
      e.target.innerText.toLowerCase()
    );
  }

  return (
    <ul className="nav__ul">
      <li>
        <a href="#" className="nav__ul__a">
          Use MongoDB
        </a>
      </li>
      <li>
        <a href="#" className="nav__ul__a">
          Use LocalStorage
        </a>
      </li>
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
        </ul>
      </li>
      <li>
        <a href="#" className="nav__ul__a">
          Login
        </a>
      </li>
    </ul>
  );
}

export default Nav;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "./components/ReactAlertTemplate";

const options = {
  position: "bottom right",
  transition: "scale",
};

const initialState = {
  lists: [],
  show: "All",
  isLocalStorageAvailable: true,
  isJSONServerAvailable: true,
  currentMode: 0, //0 state from index.js, 1 state from localStorage, 2 state from json-server
  filterValue: "",
};

if (window.localStorage) {
  // if localStorage has not yet set a value, then do this
  if (localStorage.getItem("lists") === null) {
    const array = [
      [
        "更新一，首次登陆，尝试从浏览器的localStorage读取内容，如果浏览器不支持，则回到以前的模式",
        1,
      ],
      ["更新二，加入了localStorage和JSON server切换按钮", 1],
      ["更新三，如果使用了localStorage，则每次登陆（内容不丢失）", 1],
      [
        "更新四，此类数据存在本地浏览器中，对个人安全，但即使同一台电脑，跨多个浏览器，存储也是不同的",
        1,
      ],
    ];
    const str = JSON.stringify(array);
    localStorage.setItem("lists", str);
  }
  // after that, localStorage must has something to render as initialState
  initialState.lists = JSON.parse(localStorage.getItem("lists"));
  initialState.currentMode = 1;
} else {
  initialState.lists = [
    [
      "经检测，发现你的浏览器不支持本地存储，请更换浏览器，否则无法永久保存数据",
      1,
    ],
    ["IE6 IE7 不支持localStorage", 1],
  ];
  initialState.isLocalStorageAvailable = false;
}

const store = configureStore(initialState);

ReactDOM.render(
  <ReduxProvider store={store}>
    <AlertProvider template={AlertTemplate} options={options}>
      <App />
    </AlertProvider>
  </ReduxProvider>,
  document.getElementById("root")
);

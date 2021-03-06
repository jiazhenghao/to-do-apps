import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";

const initialState = {
  lists: [
    ["learn Java", 0],
    ["learn C++", 0],
    ["learn how to live under shit mountain", 1],
    ["win the war against 4 spaces", 1],
  ],
  show: "All",
};
const store = configureStore(initialState);

ReactDOM.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";

const initialState = {
  lists: [
    ["熟读孙子兵法，三十六计", 1],
    ["15层限时风暴神殿", 0],
    ["learn how to live under shit mountain", 0],
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

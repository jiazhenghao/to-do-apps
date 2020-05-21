import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "./components/ReactAlertTemplate/";
import { options, initialState } from "./config";
import { localStorageInitialize } from "./utils/localStorageInitialize";
import "./index.css";
// import "./utils/webToken";

const state = localStorageInitialize(initialState);

const store = configureStore(state);

ReactDOM.render(
  <ReduxProvider store={store}>
    <AlertProvider template={AlertTemplate} options={options}>
      <App />
    </AlertProvider>
  </ReduxProvider>,
  document.getElementById("root")
);

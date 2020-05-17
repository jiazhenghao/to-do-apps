import { take, put } from "redux-saga/effects";
import axios from "axios";
import * as types from "../actions/actionTypes";
import { processAuthenticateUser, setMongoState } from "../actions/loginAction";
import { history } from "../history";

// add production url to ""
const url =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3001";

export function* userAuthenticationSaga() {
  while (true) {
    const { username, password } = yield take(types.REQUEST_AUTHENTICATE_USER);
    try {
      const { data } = yield axios.post(url + "/authenticate", {
        username,
        password,
      });
      if (!data) {
        throw new Error("Login Failed! Try Again maybe");
      }
      console.log("Authenticated!!!");
      console.log(data);

      // change state according to data fetched from MongoDB
      yield put(setMongoState({ currentMode: 2 }));

      // change state.authenticated to "AUTENTICATED"
      yield put(processAuthenticateUser("AUTHENTICATED"));

      history.push("/index");
    } catch (e) {
      console.log("Can't authenticate!");
      yield put(processAuthenticateUser("NOT_AUTHENTICATED"));
    }
  }
}

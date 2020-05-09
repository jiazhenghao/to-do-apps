import { take } from "redux-saga/effects";
import axios from "axios";
import * as types from "../actions/actionTypes";
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
      console.log("Authenticated!!!", data);
      // yield put(types.setState(data.state));
      // yield put(types.processAuthenticateUser(types.AUTHENTICATED));
      history.push("/index");
    } catch (e) {
      console.log("Can't authenticate!");
      // yield put(types.processAuthenticateUser(types.NOT_AUTHENTICATED));
    }
  }
}

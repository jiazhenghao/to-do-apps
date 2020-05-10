import * as types from "./actionTypes";

export function requestAuthenticateUser(username, password) {
  return { type: types.REQUEST_AUTHENTICATE_USER, username, password };
}

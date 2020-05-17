import * as types from "./actionTypes";

export function requestAuthenticateUser(username, password) {
  return { type: types.REQUEST_AUTHENTICATE_USER, username, password };
}

export function processAuthenticateUser(status) {
  return { type: types.PROCESS_AUTHENTICATE_USER, status };
}

import * as types from "./actionTypes";

export function requestAuthenticateUser(username, password) {
  return { type: types.REQUEST_AUTHENTICATE_USER, username, password };
}

export function processAuthenticateUser(status) {
  return { type: types.PROCESS_AUTHENTICATE_USER, status };
}

export function setMongoState(state) {
  return { type: types.SET_MONGO_STATE, state };
}

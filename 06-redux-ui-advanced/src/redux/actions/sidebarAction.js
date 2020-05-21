import * as types from "./actionTypes";

export function deleteForever(index) {
  return { type: types.DELETEFOREVER, index };
}

export function recover(index) {
  return { type: types.RECOVER, index };
}

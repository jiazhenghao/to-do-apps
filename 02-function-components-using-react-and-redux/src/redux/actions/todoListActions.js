import * as types from "./actionTypes";

export function toggle(index) {
  return { type: types.TOGGLE, index };
}

export function deleteOneItem(index) {
  return { type: types.DELETEONEITEM, index };
}

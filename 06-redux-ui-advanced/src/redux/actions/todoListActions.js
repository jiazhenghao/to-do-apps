import * as types from "./actionTypes";

export function toggle(index) {
  return { type: types.TOGGLE, index };
}

export function deleteOneItem(index) {
  return { type: types.DELETEONEITEM, index };
}

export function liftOne(index) {
  return { type: types.LIFT_ONE, index };
}

export function downOne(index) {
  return { type: types.DOWN_ONE, index };
}

export function liftTop(index) {
  return { type: types.LIFT_TOP, index };
}

export function downBottom(index) {
  return { type: types.DOWN_BOTTOM, index };
}

export function toSave(index, text) {
  return { type: types.TO_SAVE, index, text };
}

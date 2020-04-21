import * as types from "./actionTypes";

export function addOneItem(value) {
  return { type: types.ADDONEITEM, value };
}

export function changeFilterValue(value) {
  return { type: types.CHANGEFILTERVALUE, value };
}

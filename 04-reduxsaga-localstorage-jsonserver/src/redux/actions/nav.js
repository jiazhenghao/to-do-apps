import * as types from "./actionTypes";

export function changeThemeColor(value) {
  return { type: types.CHANGETHEMECOLOR, value };
}

export function changeLanguage(value) {
  return { type: types.CHANGELANGUAGE, value };
}

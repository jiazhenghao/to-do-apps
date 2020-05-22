import * as types from "./actionTypes";

export function coverStateLocalstorage(state) {
  return { type: types.COVER_STATE_LOCALSTORAGE, state };
}

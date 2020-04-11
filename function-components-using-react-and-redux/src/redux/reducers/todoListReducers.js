import * as types from "../actions/actionTypes";
// import initialState from "./initialState";

export default function todoListReducer(state, action) {
  if (action.type === types.TOGGLE) {
    if (state.lists[action.index] === undefined) {
      return state;
    } else {
      // let newLists = state.lists.slice(); // A state mutation was detected inside a dispatch,
      let newLists = state.lists.map((value) => [...value]);
      newLists[action.index][1] = !newLists[action.index][1] * 1;
      return { ...state, lists: newLists };
    }
  } else if (action.type === types.DELETEONEITEM) {
    let newLists = state.lists.map((value) => [...value]);
    newLists.splice(action.index, 1);
    return { ...state, lists: newLists };
  } else {
    return state;
  }
}

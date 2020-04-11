import * as types from "../actions/actionTypes";

export default function rootReducer(state, action) {
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
  } else if (action.type === types.ADDONEITEM) {
    let newLists = state.lists.map((value) => [...value]);
    newLists.push([action.value, 1]);
    return { ...state, lists: newLists };
  } else if (action.type === types.CHANGESHOWSTATUS) {
    return { ...state, show: action.value };
  } else {
    return state;
  }
}

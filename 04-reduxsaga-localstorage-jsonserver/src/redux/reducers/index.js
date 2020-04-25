import * as types from "../actions/actionTypes";

export default function rootReducer(state, action) {
  if (action.type === types.TOGGLE) {
    if (state.lists[action.index] === undefined) {
      return state;
    } else {
      let newLists = state.lists.map((value) => [...value]);
      newLists[action.index][1] = !newLists[action.index][1] * 1;
      // localStorage
      if (state.currentMode === 1) {
        const str = JSON.stringify(newLists);
        localStorage.setItem("lists", str);
      }
      return { ...state, lists: newLists };
    }
  } else if (action.type === types.DELETEONEITEM) {
    if (state.filterValue !== "") {
      return state;
    }
    let newLists = state.lists.map((value) => [...value]);
    newLists.splice(action.index, 1);
    // localStorage
    if (state.currentMode === 1) {
      const str = JSON.stringify(newLists);
      localStorage.setItem("lists", str);
    }
    return { ...state, lists: newLists };
  } else if (action.type === types.ADDONEITEM) {
    let newLists = state.lists.map((value) => [...value]);
    newLists.push([action.value, 1]);
    // if localStorage is available, then store the new data into localStorage
    if (state.currentMode === 1) {
      const str = JSON.stringify(newLists);
      localStorage.setItem("lists", str);
    }
    return { ...state, lists: newLists, filterValue: "" };
  } else if (action.type === types.CHANGESHOWSTATUS) {
    return { ...state, show: action.value };
  } else if (action.type === types.CHANGEFILTERVALUE) {
    return { ...state, filterValue: action.value };
  } else if (action.type === types.CHANGETHEMECOLOR) {
    return { ...state, themeColor: action.value };
  } else {
    return state;
  }
}

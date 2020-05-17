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
    const deletedItem = newLists.splice(action.index, 1);
    // deletedItems read
    let newDeletedItems = state.deletedItems.map((value) => [...value]);
    const oDate = new Date();
    const dateFormat =
      oDate.toLocaleDateString() +
      " " +
      oDate.getHours() +
      ":" +
      oDate.getMinutes() +
      ":" +
      oDate.getSeconds();
    newDeletedItems.unshift([deletedItem[0][0], dateFormat]);
    // localStorage
    if (state.currentMode === 1) {
      const str = JSON.stringify(newLists);
      localStorage.setItem("lists", str);
      // put deleted items into localStorage "deletedItems"
      const strDeleted = JSON.stringify(newDeletedItems);
      localStorage.setItem("deletedItems", strDeleted);
    }
    return { ...state, lists: newLists, deletedItems: newDeletedItems };
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
  } else if (action.type === types.RECOVER) {
    let newLists = state.lists.map((value) => [...value]);
    let newDeletedItems = state.deletedItems.map((value) => [...value]);
    const item = newDeletedItems.splice(action.index, 1);
    newLists.unshift([item[0][0], 1]);
    // update localStorage
    if (state.currentMode === 1) {
      // put deleted items into localStorage "deletedItems"
      const strDeleted = JSON.stringify(newDeletedItems);
      localStorage.setItem("deletedItems", strDeleted);
      // update localStorage "lists"
      const str = JSON.stringify(newLists);
      localStorage.setItem("lists", str);
    }
    return { ...state, deletedItems: newDeletedItems, lists: newLists };
  } else if (action.type === types.DELETEFOREVER) {
    // delete from localStorage and change state
    let newDeletedItems = state.deletedItems.map((value) => [...value]);
    newDeletedItems.splice(action.index, 1);
    // localStorage deleting
    if (state.currentMode === 1) {
      // put deleted items into localStorage "deletedItems"
      const strDeleted = JSON.stringify(newDeletedItems);
      localStorage.setItem("deletedItems", strDeleted);
    }
    return { ...state, deletedItems: newDeletedItems };
  } else if (action.type === types.CHANGELANGUAGE) {
    return { ...state, language: action.value };
  } else if (action.type === types.REQUEST_AUTHENTICATE_USER) {
    return { ...state, authenticated: "AUTHENTICATING" };
  } else if (action.type === types.PROCESS_AUTHENTICATE_USER) {
    return { ...state, authenticated: action.status };
  } else {
    return state;
  }
}

export const options = {
  position: "bottom right",
  transition: "scale",
};

export const initialState = {
  lists: [],
  show: 0, // 0:All 1:Active 2:Completed
  isLocalStorageAvailable: true,
  currentMode: 0, // 0: state is not stored, 1: state is from localStorage,
  filterValue: "",
  themeColor: 0,
  deletedItems: [],
  language: 0, // 0:English 1:Chinese
  authenticated: "NOT_AUTHENTICATED",
};

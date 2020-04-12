export const show = {
  state: "All",
  reducers: {
    changeShowStatus(state, value) {
      return value;
    },
  },
};

export const lists = {
  state: [
    ["lalagang stronger", 0],
    ["熟读孙子兵法，三十六计", 1],
    ["15层限时风暴神殿", 0],
    ["cook breakfast", 0],
    ["diablo3 season campaign", 1],
  ],
  reducers: {
    addOneItem(state, value) {
      let newLists = state.map((value) => [...value]);
      newLists.push([value, 1]);
      return newLists;
    },
    toggle(state, index) {
      if (state[index] === undefined) {
        return state;
      } else {
        let newLists = state.map((value) => [...value]);
        newLists[index][1] = !newLists[index][1] * 1;
        return newLists;
      }
    },
    deleteOneItem(state, index) {
      let newLists = state.map((value) => [...value]);
      newLists.splice(index, 1);
      return newLists;
    },
  },
};

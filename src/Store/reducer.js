function reducer(state, action) {
  switch (action.type) {
    case "addProduct":
      state.push(action.item);
      return [...state];

    case "removeProduct":
      const filtered = state.filter((item) => {
        return item.id !== action.id;
      });
      return [...filtered];

    case "INITIALIZE":
      return action.payload;

    case "CLEAR_BASKET":
      return [];

    default:
      return state;
  }
}
export default reducer;

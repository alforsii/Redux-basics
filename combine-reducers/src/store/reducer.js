const initialState = {
  a: 1,
  b: 2,
};

  // basically exports the state
const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "UPDATE_A":
      return {
        ...state,
        a: state.a + state.b,
      }
    case "UPDATE_B":
      return {
        ...state,
        b: state.a + state.b,
      }
      default:
      return state
  }
};

export default reducer;

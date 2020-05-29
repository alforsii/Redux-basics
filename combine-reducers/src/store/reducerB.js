const initialState = {
    b: 2,
  };
  
    // basically exports the state
  const reducer = (state = initialState, action) => {
  
    switch (action.type) {
      case "UPDATE_B":
        return {
          ...state,
          b: action.a + state.b,
        }
        default:
        return state
    }
  };
  
  export default reducer;
  
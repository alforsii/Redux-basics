const initialState = {
    a: 1,

  };
  
  // basically exports the state
  const reducer = (state = initialState, action) => {
  
    switch (action.type) {
      case "UPDATE_A":
        return {
          ...state,
          a: state.a + action.b,
        }
 
        default:
        return state
    }
  };
  
  export default reducer;
  
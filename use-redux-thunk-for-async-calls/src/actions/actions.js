const ageUpAsync = (val) => ({ type: 'AGE_UP', value: val });
//we apply applyMiddleware(thunk)
//to be able to use async functions in our actions methods
//and we follow the same pattern below
// return dispatch inside our actions method
// and pass action inside dispatch

//async simulator
//Loading message
export const loading = () => ({ type: 'LOADING' });
//1-way
export const ageUp = (val) => {
  return (dispatch) => {
    dispatch(loading()); //sync
    setTimeout(() => {
      dispatch(ageUpAsync(val));
    }, 2000); //async
  };
};
// //2-way with ES-6
// export const ageUp = val => dispatch => setTimeout(() => dispatch(ageUpAsync(val)),2000)

// this is without async function
export const ageDown = (val) => ({ type: 'AGE_DOWN', value: val });

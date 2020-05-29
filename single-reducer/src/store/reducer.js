const initialState = {
    age: 20,
};

const reducer = (state=initialState, action) => {

    switch(action.type){
        case 'AGE_UP': 
         return {
             ...state,
                age: state.age + action.val
         }
        case 'AGE_DOWN': 
            return {
                ...state,
                age: state.age - action.val 
            }

            default:
            return state;
    }
};

export default reducer;
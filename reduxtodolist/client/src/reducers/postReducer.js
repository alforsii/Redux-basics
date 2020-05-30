import { GET_POSTS, ADD_POST, DELETE_POST, LOADING } from '../actions/types'

const initialState = {
    posts: [], 
    loading: false,
    message: '',
    progress: 0
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.posts,
                loading: false
            }
        case ADD_POST:
            return {
                ...state,
                posts: [action.post, ...state.posts],
                loading: false
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(
                    post => post.id !== action.id
                ),
                loading: false
            }
        case LOADING:
            return {
                ...state,
                loading: true,
                message: action.message,
                progress: action.progress
            }
        default:
            return state
    }
}
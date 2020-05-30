import axios from 'axios'

import { ADD_POST, GET_POSTS, LOADING } from './types'
//https://jsonplaceholder.typicode.com/posts
const myUrl = '/posts'
const BASE_URL = process.env.REACT_APP_BASE_URL

const service = axios.create({
    baseURL: BASE_URL,
    // withCredentials: true
})
export const getPosts = () => dispatch => {
  let progress = 0
    console.log('getting Posts...')
    service.get(
      myUrl,  {
        onDownloadProgress: function(event) {
          progress = Math.round((event.loaded * 100) / event.total);
          dispatch(loading('Getting posts, please wait...', progress))
      }
  })
    .then(posts => {
      return  dispatch({ type: GET_POSTS, posts: posts.data})
    })
    .catch(err => {
      dispatch(loading('Sorry, something went wrong. Please try later!🙁', progress))
      console.log(err)
    })
}

export const addPost = (post) => dispatch => {
  let progress = 0
    console.log('adding Post...')
    dispatch(loading('Adding Post, please wait...', progress))
    service.post(myUrl, post, {
      onUploadProgress: (event) => {
       progress = Math.round((event.loaded * 100) / event.total);
        dispatch(loading('Adding Post, please wait...', progress))
      }
 })
    .then(post => {
      return  dispatch({ type: ADD_POST, post: post.data})
    })
    .catch(err => {
      console.log(err)
      dispatch(loading('Sorry, something went wrong. Please try later!🙁', progress))
    })
}

export const loading = (message, progress) => ({ type: LOADING, message, progress})


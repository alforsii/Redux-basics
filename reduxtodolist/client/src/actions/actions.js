import axios from 'axios';

import {
  ADD_POST,
  GET_POSTS,
  UPDATE_POST,
  DELETE_POST,
  LOADING,
} from './types';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const service = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// @Method GET `/posts`
// @desc get all posts
export const getPosts = () => (dispatch) => {
  let progress = 0;
  console.log('getting Posts...');
  service
    .get('/posts', {
      onDownloadProgress: function (event) {
        progress = Math.round((event.loaded * 100) / event.total);
        dispatch(loading('Getting posts, please wait...', progress));
      },
    })
    .then((posts) => {
      return dispatch({ type: GET_POSTS, posts: posts.data });
    })
    .catch((err) => {
      dispatch(
        loading('Sorry, something went wrong. Please try later!🙁', progress)
      );
      console.log(err);
    });
};

// @Method POST `/posts`
// @desc add single post
export const addPost = (post) => (dispatch) => {
  let progress = 0;
  console.log('adding Post...');
  dispatch(loading('Adding Post, please wait...', progress));
  service
    .post('/post/new', post, {
      onUploadProgress: (event) => {
        progress = Math.round((event.loaded * 100) / event.total);
        dispatch(loading('Adding Post, please wait...', progress));
      },
    })
    .then((post) => {
      return dispatch({ type: ADD_POST, post: post.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch(
        loading('Sorry, something went wrong. Please try later!🙁', progress)
      );
    });
};

// @Method PATCH `/posts/${id}`
// @desc update post
export const updatePost = (id, updates) => (dispatch) => {
  let progress = 0;
  console.log('updating Post...');
  dispatch(loading('Updating Post, please wait...', progress));
  service
    .patch(`/post/${id}/update`, updates, {
      onUploadProgress: (event) => {
        progress = Math.round((event.loaded * 100) / event.total);
        dispatch(loading('Updating Post, please wait...', progress));
      },
    })
    .then((post) => {
      return dispatch({ type: UPDATE_POST, post: post.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch(
        loading('Sorry, something went wrong. Please try later!🙁', progress)
      );
    });
};

// @Method DELETE `/posts/${id}`
// @desc delete post
export const deletePost = (id) => (dispatch) => {
  let progress = 0;
  console.log('deleting Post...');
  dispatch(loading('Removing Post, please wait...', progress));
  service
    .delete(`/post/${id}/delete`, {
      onUploadProgress: (event) => {
        progress = Math.round((event.loaded * 100) / event.total);
        dispatch(loading('Removing Post, please wait...', progress));
      },
    })
    .then((data) => {
      console.log('Output for: post', data);
      return dispatch({ type: DELETE_POST, id: data.data.post._id });
    })
    .catch((err) => {
      console.log(err);
      dispatch(
        loading('Sorry, something went wrong. Please try later!🙁', progress)
      );
    });
};

//@desc update loading status
export const loading = (message, progress) => ({
  type: LOADING,
  message,
  progress,
});

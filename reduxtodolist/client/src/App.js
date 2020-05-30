import React from 'react';
import { connect } from 'react-redux';
// import logo from './logo.svg';
import { Progress } from 'antd';

import Posts from './components/Posts';
import AddPostForm from './components/AddPostForm';
import * as actions from './actions/actions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>Hello world from App.js</h2>
        <button onClick={this.props.getPosts}>Get posts</button>

        <AddPostForm addPost={this.props.addPost} />
        <p>{this.props.loading && this.props.message}</p>
        <Progress strokeLinecap="square" percent={this.props.progress} />
        <Posts
          posts={this.props.posts}
          deletePost={this.props.deletePost}
          updatePost={this.props.updatePost}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Output for: state', state);
  return {
    posts: state.postReducer.posts,
    message: state.postReducer.message,
    loading: state.postReducer.loading,
    progress: state.postReducer.progress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(actions.getPosts()),
    addPost: (post) => dispatch(actions.addPost(post)),
    deletePost: (id) => dispatch(actions.deletePost(id)),
    updatePost: (id, updates) => dispatch(actions.updatePost(id, updates)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

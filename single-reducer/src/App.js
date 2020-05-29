import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from './actions/actions'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
     <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch(actions.ageUp(1)),
    onAgeDown: () => dispatch(actions.ageDown(1)),
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);

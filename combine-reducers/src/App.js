import React, { Component } from "react";
import "./App.css";

//its a function that returns higer order compoent
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="age">
           A: <span>{this.props.a}</span>
         <button className="ageUp" onClick={() => this.props.updateA(this.props.b)}>update A</button>
        </div>
        <div className="age">
           B: <span>{this.props.b}</span>
         <button className="ageUp" onClick={() => this.props.updateB(this.props.a)}>update B</button>
        </div>
      </div>
    );
  }
}

//this is the state which we will be catching in the reducers
const mapStoreToProps = store => {
  return {
    a: store.rA.a,
    b: store.rB.b,
  };
};
//this is action which we will be catching in the reducers
const mapDispachToProps = dispatch => {
  return {
    updateA: (b) => dispatch({ type: "UPDATE_A", b:b}),
    updateB: (a) => dispatch({ type: "UPDATE_B", a:a})
  };
};
//this is the connection with component,
// where we're passing the state and the methods from the redux store to the App component
export default connect(
  mapStoreToProps, //first arg the state
  mapDispachToProps //second methods
)(App);

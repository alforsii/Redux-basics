import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './store/reducer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);

// subscribe() watches if state changed
store.subscribe(() => {
    console.log("State Changed:", store.getState())
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


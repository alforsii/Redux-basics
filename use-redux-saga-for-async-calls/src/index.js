import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSaga from 'redux-saga';

import './index.css';
import App from './App';
import reducer from './store/reducer';
import { watchAgeUp } from './saga/saga'


const sagaMiddleware = createSaga()


const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAgeUp)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


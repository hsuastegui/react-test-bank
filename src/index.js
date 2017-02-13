import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store/Store';
import Routes from './components/Routes';
import './index.css';

let initialState = {};
const store = Store(initialState);

ReactDOM.render(
  <Provider store={store}>{Routes}</Provider>,
  document.getElementById('root')
);

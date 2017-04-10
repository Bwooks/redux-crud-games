import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './App';
import './index.css';
import reducer from './reducers/index.js';

const store = createStore(
  reducer, 
  composeWithDevTools(applyMiddleware(thunk))
  );
const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  );
ReactDOM.render(
  app,
  document.getElementById('root')
);

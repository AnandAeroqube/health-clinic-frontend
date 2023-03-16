import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import { rootReducer } from './redux/reducers';
import { apiMiddleware } from './middleware/axiosDefaultConfig';
import { BrowserRouter } from 'react-router-dom';

const store =  createStore(rootReducer,applyMiddleware(thunk,apiMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

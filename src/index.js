import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import { store } from './state/store/store';
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store ={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>,
=======
import { Provider } from 'react-redux';
import { store } from './state/store/store.js'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
>>>>>>> 82dd1ad640a3246ba5a5f85b4dc6533b5e992b21
  document.getElementById('root')
);

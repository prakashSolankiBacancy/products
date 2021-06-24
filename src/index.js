import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './Store/Store';
import AppView from './Component/AppView';
import "materialize-css/dist/css/materialize.min.css";


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <AppView />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

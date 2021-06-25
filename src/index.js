import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import AppView from './Component/AppView';
import 'materialize-css/dist/css/materialize.min.css';
import AuthContextProvider from '../src/Context/LoggedUserContext';
import './Styles';


ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
          <AppView />
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

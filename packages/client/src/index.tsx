import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.scss';

import App from './App';
import { createStore } from './store';
import { UserService } from '@services/user.service';
import { ApiRepository } from 'repository/ApiRepository';

const initialState = window.__PRELOADED_STATE__;

const store = createStore(new UserService(new ApiRepository()), initialState);

delete window.__PRELOADED_STATE__;

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

import React from 'react';
import { Provider } from 'react-redux';
import App from '../src/App';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { createStore } from '../src/store';
import { loadUser } from '../src/store/thunks/user';
import { UserRepository, UserService } from '../src/services/user.service';

export const render = async (url: string, repository: UserRepository) => {
  const store = createStore(new UserService(repository));

  await store.dispatch(loadUser());

  const initialState = store.getState();

  console.log(initialState);

  const renderResult = renderToString(
    <StaticRouter location={url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );

  return [renderResult, initialState];
};

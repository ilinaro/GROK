import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});
export const setupStore = () => {
  let preloadedState;

  if (typeof window !== 'undefined') {
    preloadedState = window.__PRELOADED_STATE__;
    delete window?.__PRELOADED_STATE__;
  }
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
  });
};

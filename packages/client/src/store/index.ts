import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/rootReducer';
import { UserState } from './types/userTypes';
import { GameState } from './types/gameTypes';
import { UserService } from '@services/user.service';

export type StoreState = {
  user?: UserState;
  game?: GameState;
};

export const createStore = (service: UserService, preloadedState?: StoreState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleWare) =>
      getDefaultMiddleWare({
        thunk: { extraArgument: service },
      }),
  });
};

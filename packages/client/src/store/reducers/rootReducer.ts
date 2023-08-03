import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
});

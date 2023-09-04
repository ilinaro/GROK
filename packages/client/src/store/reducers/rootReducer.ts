import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import { userReducer } from '@store/slices/user/userSlice';

export const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
});

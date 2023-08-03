import {
  CLEAR_USER_ERRORS,
  DELETE_USER,
  SET_USER,
  SET_USER_AUTH,
  SET_USER_ERROR,
  SET_USER_LOAD,
} from '@store/constants/user';
import { User, UserActionsTypes } from '@store/types/userTypes';

interface IUserState {
  user: User | null;
  loading: boolean;
  auth: boolean;
  error: null | string;
}

const initialState = {
  user: null,
  loading: false,
  auth: false,
  error: null,
};

const userReducer = (state: IUserState = initialState, action: UserActionsTypes): IUserState => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user, error: null };

    case SET_USER_AUTH:
      return { ...state, auth: true, error: null };

    case SET_USER_LOAD:
      return { ...state, loading: action.loading };

    case SET_USER_ERROR:
      return { ...state, error: action.error };

    case CLEAR_USER_ERRORS:
      return { ...state, error: null };

    case DELETE_USER:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;

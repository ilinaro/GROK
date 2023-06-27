import { IUser } from '@core/models/user';
import {
  SET_USER,
  SET_USER_AUTH,
  SET_USER_LOAD,
  SET_USER_ERROR,
  CLEAR_USER_ERRORS,
  DELETE_USER,
} from '@store/constants/user';

export interface User {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export type SetUserACType = {
  type: typeof SET_USER;
  user: IUser;
};

export type SetUserAuthACType = {
  type: typeof SET_USER_AUTH;
};

export type SetUserLoadingACType = {
  type: typeof SET_USER_LOAD;
  loading: boolean;
};

export type SetUserErrorACType = {
  type: typeof SET_USER_ERROR;
  error: string;
};

export type ClearUserErrorsACType = {
  type: typeof CLEAR_USER_ERRORS;
};

export type DeleteUserACType = {
  type: typeof DELETE_USER;
};

// Union type
export type UserActionsTypes =
  | SetUserACType
  | SetUserAuthACType
  | SetUserLoadingACType
  | SetUserErrorACType
  | ClearUserErrorsACType
  | DeleteUserACType;

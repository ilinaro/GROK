import {
  SET_USER,
  SET_USER_AUTH,
  SET_USER_LOAD,
  SET_USER_ERROR,
  CLEAR_USER_ERRORS,
  DELETE_USER,
} from '@store/constants/user';

export interface User {
  [key: string]: string | number;
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  auth: boolean;
  error: null | string;
}

export type SetUserACType = {
  type: typeof SET_USER;
  user: User;
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

export interface IChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
}

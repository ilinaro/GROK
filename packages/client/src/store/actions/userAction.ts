import { IUser } from '@core/models/user';
import {
  SET_USER,
  SET_USER_LOAD,
  SET_USER_ERROR,
  DELETE_USER,
  SET_USER_AUTH,
  CLEAR_USER_ERRORS,
} from '@store/constants/user';
import {
  SetUserACType,
  SetUserLoadingACType,
  SetUserErrorACType,
  DeleteUserACType,
  SetUserAuthACType,
  ClearUserErrorsACType,
} from '@store/types/userTypes';

// Функции создатели экшенов
export const setUserAC = (user: IUser): SetUserACType => ({ type: SET_USER, user });
export const setUserAuthAC = (): SetUserAuthACType => ({ type: SET_USER_AUTH });
export const setUserLoadingAC = (loading: boolean): SetUserLoadingACType => ({ type: SET_USER_LOAD, loading });
export const setUserErrorAC = (error: string): SetUserErrorACType => ({ type: SET_USER_ERROR, error });
export const clearUserErrorsAC = (): ClearUserErrorsACType => ({ type: CLEAR_USER_ERRORS });
export const deleteUserAC = (): DeleteUserACType => ({ type: DELETE_USER });

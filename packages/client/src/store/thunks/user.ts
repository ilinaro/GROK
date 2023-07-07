import {
  setUserAC,
  setUserLoadingAC,
  setUserErrorAC,
  deleteUserAC,
  setUserAuthAC,
  clearUserErrorsAC,
} from '@store/actions/userAction';
import { AppDispatch } from '@store/types';
import { User } from '@store/types/userTypes';
import axios from 'axios';
import { auth } from 'config/apiRoutes.config';
import { LoginFormT } from 'fuature/login/components/LoginForm/LoginForm';
import { RegistrationFormT } from 'fuature/registration/components/RegistrationForm/RegistrationForm';

import { NavigateFunction } from 'react-router-dom';

//Получаем данные о пользователе
export const getUser = async () => await axios.get<User>(auth.user, { withCredentials: true });

//Thunk для проверки авторизации и получения данных о пользователе.
export const checkAuth = () => async (dispatch: AppDispatch) => {
  dispatch(setUserLoadingAC(true));
  try {
    const response = await getUser();
    if (response.status === 200) {
      dispatch(setUserAC(response.data));
      dispatch(setUserAuthAC());
    }
    // if (response.status === 401) {
    // 	navigate('/login');
    // }
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setUserErrorAC(error.message));
    }
  } finally {
    dispatch(setUserLoadingAC(false));
  }
};

//Thunk для авторизации
export const login = (data: LoginFormT) => async (dispatch: AppDispatch) => {
  dispatch(setUserLoadingAC(true));
  try {
    const response = await axios.post(auth.signin, data, { withCredentials: true });
    if (response.status === 200) {
      dispatch(setUserAuthAC());
      const { data } = await getUser();

      dispatch(setUserAC(data));
    }
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setUserErrorAC(error.message));
    }
  } finally {
    dispatch(setUserLoadingAC(false));
  }
};

//Thunk для регистрации
export const signup = (data: RegistrationFormT) => async (dispatch: AppDispatch) => {
  dispatch(setUserLoadingAC(true));
  try {
    const response = await axios.post<{ id: number }>(auth.signup, data, { withCredentials: true });
    response.status;
    if (response.status === 200) {
      dispatch(setUserAuthAC());
      const { data } = await getUser();
      dispatch(setUserAC(data));
    }
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setUserErrorAC(error.message));
    }
  } finally {
    dispatch(setUserLoadingAC(false));
  }
};

// Thunk выхода
export const logout = () => async (dispatch: AppDispatch) => {
  dispatch(setUserLoadingAC(true));
  try {
    const response = await axios.post(auth.logout, '', { withCredentials: true });
    if (response.status === 200) {
      dispatch(deleteUserAC());
      // navigate('/login');
    }
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setUserErrorAC(error.message));
    }
  }
};

// Thunk для очистки ошибок
export const clearUserErrors = () => (dispatch: AppDispatch) => {
  dispatch(setUserLoadingAC(true));
  dispatch(clearUserErrorsAC());
  dispatch(setUserLoadingAC(false));
};

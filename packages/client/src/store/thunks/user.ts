import { setUserAC, setUserLoadingAC, setUserErrorAC, deleteUserAC, setUserAuthAC } from '@store/actions/userAction';
import { AppDispatch } from '@store/types';
import { User } from '@store/types/userTypes';
import axios from 'axios';
import { LoginFormT } from 'fuature/login/components/LoginForm/LoginForm';
import { RegistrationFormT } from 'fuature/registration/components/RegistrationForm/RegistrationForm';

import { NavigateFunction } from 'react-router-dom';

//Thunk для авторизации
export const login = (data: LoginFormT) => async (dispatch: AppDispatch) => {
  dispatch(setUserLoadingAC(true));
  try {
    const response = await axios.post(auth.signin, data);
    if (response.status === 200) {
      dispatch(setUserAuthAC());
      const { data } = await axios.get<User>(auth.user);
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
    const response = await axios.post<{ id: number }>(auth.signup, data);
    response.status;
    if (response.status === 200) {
      dispatch(setUserAuthAC());
      const { data } = await axios.get<User>(auth.user);
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
export const logout = (navigate: NavigateFunction) => async (dispatch: AppDispatch) => {
  dispatch(setUserLoadingAC(true));
  try {
    const response = await axios.get(auth.logout);
    if (response.status === 200) {
      dispatch(deleteUserAC());
      navigate('/login');
    }
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setUserErrorAC(error.message));
    }
  }
};

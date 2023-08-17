import { RegistrationFormT } from '../fuature/registration/components/RegistrationForm/RegistrationForm';
import httpService from './http.service';
import { LoginFormT } from '../fuature/login/components/LoginForm/LoginForm';
import { AxiosError } from 'axios';

// авторизация
const signin = async (authData: LoginFormT) => {
  const { data } = await httpService.post(`auth/signin`, authData);
  return data;
};

// регистрация
const signup = async (authData: RegistrationFormT) => {
  const { data } = await httpService.post(`auth/signup`, authData);
  return data;
};

// выход из системы
const logout = async () => {
  return await httpService.post(`auth/logout`);
};

const authService = {
  signin,
  signup,
  logout,
};

export default authService;

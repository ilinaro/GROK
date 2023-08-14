import { RegistrationFormT } from 'fuature/registration/components/RegistrationForm/RegistrationForm';
import httpService from './http.service';
import { LoginFormT } from 'fuature/login/components/LoginForm/LoginForm';
import { AxiosError } from 'axios';
import { REDIRECT_URI, auth } from 'config/apiRoutes.config';

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

// Переходим на сервис яндекса для получения кода

const oauthGetServiceId = async () => {
  try {
    const response = await httpService.get(auth.oauthServiceId);

    const { service_id } = response.data;

    const URL = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${service_id}&redirect_uri=${REDIRECT_URI}`;

    document.location.href = URL;
  } catch (e) {
    throw new Error('oauth error');
  }
};

// Отправляем полученный код и авторизуемся

const oauth = async (code: string) => {
  try {
    await httpService.post(auth.oauth, { code, redirect_uri: REDIRECT_URI });
  } catch (e) {
    throw new Error('oauth error');
  }
};

const authService = {
  signin,
  signup,
  logout,
  oauthGetServiceId,
  oauth,
};

export default authService;

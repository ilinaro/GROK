import axios from 'axios';
import type { Request } from 'express';
import { filterCookies } from './utils';
import { yandexEndpoint } from './constants';
import type { TUserData, TCheckAuth } from './typing';

export const yandexCheckAuthorization = async (req: Request): Promise<TCheckAuth> => {
  const filteredCookies = filterCookies(req);
  const url = `${yandexEndpoint}/api/v2/auth/user`;
  try {
    const {data} = await axios.get(url, {
      headers: {
        cookie: filteredCookies,
      },
    });
    const userId = (data as TUserData).id;
    console.log('yandexCheckAuthorization userId=', userId);
    return {
      isAuth: true,
      user: data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status !== 200) {
        return {
          isAuth: false,
        };
      }
    }
    throw new Error('Ошибка в проверке авторизации на стороне сервера');
  }
};

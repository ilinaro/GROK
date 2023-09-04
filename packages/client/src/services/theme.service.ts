import { User } from '@store/types/userTypes';
import httpService from './http.service';

const getTheme = async () => {
  try {
    const { data } = await httpService.get<string>(`theme`);
    return data;
  } catch {
    throw new Error('userServiceGetError');
  }
};

const setTheme = async (theme: string) => {
  try {
    const { data } = await httpService.patch<string>(`theme`, theme);
    return data;
  } catch {
    throw new Error('userServiceGetError');
  }
};

const themeService = {
  getTheme,
  setTheme,
};

export default themeService;

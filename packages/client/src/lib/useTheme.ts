import themeService from '@services/theme.service';
import { AxiosError } from 'axios';
import { useLayoutEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { isServerSide } from './isServerSide';

// проверяем тему системы
const isDarkTheme = !isServerSide ? window?.matchMedia('(prefers-color-scheme: dark)').matches : false;
const defaultTheme = isDarkTheme ? 'dark' : 'light';

type Theme = 'dark' | 'ligth';

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || defaultTheme);

  const { data } = useQuery(['theme'], () => themeService.getTheme(), {
    // enabled: false,
    onSuccess: (data) => {
      setTheme(data);
    },
  });

  const { mutate } = useMutation<void, AxiosError, string>(async (data) => {
    await themeService.setTheme(data);
  });

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
    mutate(theme);
  }, [theme]);

  return { theme, setTheme };
};

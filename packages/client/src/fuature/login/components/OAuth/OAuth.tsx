import authService from '@services/auth.service';
import React from 'react';
import { useQuery } from 'react-query';
import styles from './styles.module.scss';
import { Navigate } from 'react-router-dom';
import { RouteNames } from '@routes/routeNames';
import { useNotification } from 'fuature/forum/hooks/useNotification';

interface IOAuth {
  code: string;
}

export const OAuth: React.FC<IOAuth> = ({ code }) => {
  const { notify } = useNotification();

  const { isLoading, error } = useQuery([`${code}-oauth'`], () => authService.oauth(code), {
    enabled: !!code,
    onError: () => {
      notify('Ошибка при входе');
    },
  });

  if (isLoading)
    return (
      <div className={styles.oauthContainer}>
        {' '}
        <span>Авторизация</span>
      </div>
    );

  return error ? <Navigate to={RouteNames.LOGIN} /> : <Navigate to={RouteNames.START} />;
};

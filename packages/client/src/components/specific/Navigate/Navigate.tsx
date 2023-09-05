import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Navigate.module.scss';
import clsx from 'clsx';
import { Button } from '@components/design-system';
import { useMutation, useQueryClient } from 'react-query';
import { RouteNames } from '@routes/routeNames';
import { AxiosError } from 'axios';
import { authApi } from '@api/auth';

type NavigateT = {};

export const Navigate: React.FC<NavigateT> = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate } = useMutation<string, AxiosError<{ reason: string }>>(() => authApi.logout(), {
    onSuccess: () => {
      navigate(RouteNames.LOGIN);
    },
  });

  return (
    <nav className={styles.Navigate}>
      <NavLink className={({ isActive }) => clsx({ [styles.Active]: isActive }, styles.Home)} to="/">
        Старт
      </NavLink>
      <NavLink className={({ isActive }) => clsx({ [styles.Active]: isActive }, styles.Leaders)} to="/leaders">
        Лидеры
      </NavLink>
      <NavLink className={({ isActive }) => clsx({ [styles.Active]: isActive }, styles.Profile)} to="/profile">
        Профиль
      </NavLink>
      <NavLink className={({ isActive }) => clsx({ [styles.Active]: isActive }, styles.Progress)} to="/progress">
        Прогресс
      </NavLink>
      <NavLink className={({ isActive }) => clsx({ [styles.Active]: isActive }, styles.Forum)} to="/forum">
        Форум
      </NavLink>
      <Button fullWidth={true} onClick={() => mutate()}>
        Выйти
      </Button>
    </nav>
  );
};

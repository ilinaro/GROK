import { NavLink } from 'react-router-dom';
import styles from './Navigate.module.scss';
import clsx from 'clsx';
import { Button } from '@components/design-system';
import authService from '@services/auth.service';
import { useMutation, useQueryClient } from 'react-query';

type NavigateT = {};

export const Navigate: React.FC<NavigateT> = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    async () => {
      await authService.logout();
    },
    {
      onSuccess: () => {
        queryClient.refetchQueries(['user']);
      },
    }
  );

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

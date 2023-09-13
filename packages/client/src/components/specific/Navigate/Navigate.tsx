import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Navigate.module.scss';
import clsx from 'clsx';
import { Button } from '@components/design-system';
import { RouteNames } from '@routes/routeNames';
import { authApi } from '@api/auth';

type NavigateT = {};

export const Navigate: React.FC<NavigateT> = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await authApi.logout();
      navigate(RouteNames.LOGIN, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

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
      <Button fullWidth={true} onClick={logout}>
        Выйти
      </Button>
    </nav>
  );
};

import { NavLink } from 'react-router-dom';
import styles from './Navigate.module.scss';
import clsx from 'clsx';
import { Button } from '@components/design-system';
import { useAppDispatch } from '@store/hooks';
import { logout } from '@store/thunks/user';

type NavigateT = {};

export const Navigate: React.FC<NavigateT> = () => {
  const dispatch = useAppDispatch();

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
      <button onClick={() => dispatch(logout())}>Выйти</button>
    </nav>
  );
};

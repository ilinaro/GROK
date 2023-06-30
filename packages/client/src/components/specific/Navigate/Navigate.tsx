import { NavLink } from 'react-router-dom';
import styles from './Navigate.module.scss';
import clsx from 'clsx';

type NavigateT = {};

export const Navigate: React.FC<NavigateT> = () => {
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
    </nav>
  );
};

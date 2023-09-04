import { useTheme } from '@lib/useTheme';
import styles from './ToggleTheme.module.scss';
import clsx from 'clsx';

interface IToggleTheme {
  className?: string;
}

export const ToggleTheme = ({ className }: IToggleTheme) => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <label className={clsx(styles.switch, className)}>
      <input type="checkbox" onChange={changeTheme} checked={theme === 'dark'} />
      <span className={clsx(styles.slider, styles.round)}></span>
    </label>
  );
};

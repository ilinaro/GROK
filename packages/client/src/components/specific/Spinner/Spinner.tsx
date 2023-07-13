import clsx from 'clsx';
import styles from './Spinner.module.scss';

interface ISpinnerProps {
  type?: 'simple' | 'usual';
  color?: 'white' | 'black';
  background?: boolean;
  size?: number;
  strokeWidth?: number;
  center?: boolean;
}

export const Spinner = ({
  type = 'usual',
  color = 'white',
  background = false,
  size = 50,
  strokeWidth = 3,
  center = false,
}: ISpinnerProps) => {
  const radius = (size - strokeWidth) / 2;

  return (
    <svg
      className={clsx(
        styles.Spinner,
        center && styles[`Spinner__center`],
        styles[`Spinner__${type}`],
        styles[`Spinner__${color}`]
      )}
      style={{ width: size, height: size }}
      viewBox={`0 0 ${size} ${size}`}
    >
      <circle
        className={clsx(background && styles[`Spinner__bgCircle`])}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        strokeWidth={strokeWidth}
      ></circle>
      <circle
        className={styles[`Spinner__circle`]}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        strokeWidth={strokeWidth}
      ></circle>
    </svg>
  );
};

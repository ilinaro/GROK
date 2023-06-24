import { FontPropsT } from '@typings/fonts';
import clsx from 'clsx';
import { correctWeight } from '@utils/correctWeight';
import styles from './Subheader.module.scss';
import { useGetCSSVars } from '@lib/useGetCSSVars';

export const Subheader: React.FC<FontPropsT> = ({
  children,
  className = '',
  color = 'inherit',
  weight = 'normal',
  sx,
  ...props
}) => {
  const currentColor = useGetCSSVars('color', color);
  const currentWeight = correctWeight(weight);
  return (
    <span
      style={{ color: currentColor, fontWeight: currentWeight, ...sx }}
      className={clsx(styles.Subheader, className)}
      {...props}
    >
      {children}
    </span>
  );
};

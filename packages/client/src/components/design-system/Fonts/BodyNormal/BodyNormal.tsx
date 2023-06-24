import { FontPropsT } from '@typings/fonts';
import clsx from 'clsx';
import { correctWeight } from '@utils/correctWeight';
import styles from './BodyNormal.module.scss';
import { useGetCSSVars } from '@lib/useGetCSSVars';

export const BodyNormal: React.FC<FontPropsT> = ({
  children,
  className,
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
      className={clsx(styles.BodyNormal, className)}
      {...props}
    >
      {children}
    </span>
  );
};

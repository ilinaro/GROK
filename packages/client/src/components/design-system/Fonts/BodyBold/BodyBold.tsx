import { FontPropsT } from '@typings/fonts';
import clsx from 'clsx';
import { correctWeight } from '@utils/correctWeight';
import styles from './BodyBold.module.scss';
import { useGetCSSVars } from '@lib/useGetCSSVars';

export const BodyBold: React.FC<FontPropsT> = ({
  children,
  className,
  color = 'inherit',
  weight = 'medium',
  sx,
  ...props
}) => {
  const currentColor = useGetCSSVars('color', color);
  const currentWeight = correctWeight(weight);

  return (
    <span
      style={{ color: currentColor, fontWeight: currentWeight, ...sx }}
      className={clsx(styles.BodyBold, className)}
      {...props}
    >
      {children}
    </span>
  );
};

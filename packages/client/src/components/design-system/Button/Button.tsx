import * as React from 'react';

import clsx from 'clsx';
import styles from './Button.module.scss';
import { Spinner } from '@components/specific/Spinner';
import { BodyNormal } from '../Fonts';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  active?: boolean;
  border?: boolean;
  color?: 'blue' | 'pink';
  loading?: boolean;
  loadingText?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  fullWidth,
  active,
  color = 'pink',
  size = 'medium',
  border = false,
  style,
  loading,
  loadingText = 'Загрузка...',
  disabled,
  ...props
}) => {
  return (
    <button
      {...props}
      style={fullWidth ? { width: '100%', ...style } : style}
      className={clsx(
        styles.Button,
        styles[`Button__${color}`],
        styles[`Button__${size}`],
        active && styles[`Button__${color}_active`],
        className
      )}
      disabled={loading || disabled}
    >
      {loading ? (
        <>
          <Spinner size={14} strokeWidth={1} color={'white'} type={'usual'} />
          <div className={styles[`Button__content_load`]}>
            <BodyNormal className={styles.s} weight={'normal'}>
              {loadingText}
            </BodyNormal>
          </div>
        </>
      ) : (
        <div className={styles[`Button__content`]}>{children}</div>
      )}
    </button>
  );
};

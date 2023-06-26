import * as React from 'react';

import clsx from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  active?: boolean;
  border?: boolean;
  color?: 'blue' | 'pink';
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
    >
      {children}
    </button>
  );
};

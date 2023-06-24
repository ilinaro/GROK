import * as React from 'react';

import clsx from 'clsx';
import styles from './button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  active?: boolean;
  border?: boolean;
  borderColor?: 'green' | 'dark' | 'white';
  color?: 'white-green' | 'green' | 'white';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  fullWidth,
  active,
  color = 'green',
  size = 'medium',
  border = false,
  borderColor = 'white',
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
        borderColor && styles[`Button__border_${borderColor}`],
        className
      )}
    >
      {children}
    </button>
  );
};

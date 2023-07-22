import React, { ReactNode } from 'react';
import styles from './style.module.scss';

interface IButtonProps {
  children: ReactNode;
  onClick(e?: React.MouseEvent): void;
}

export const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.EditButton}>
      {children}
    </button>
  );
};

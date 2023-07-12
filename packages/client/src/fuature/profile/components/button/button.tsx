import React, { ReactNode } from 'react';
import styles from './style.module.scss';

interface IButtonProps {
  children: ReactNode;
  onClick(e: Event): void;
}

export const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  //@ts-ignore
  return (
    <button onClick={onClick} className={styles.EditButton}>
      {children}
    </button>
  );
};

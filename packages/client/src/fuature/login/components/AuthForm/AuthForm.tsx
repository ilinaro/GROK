import { ReactNode } from 'react';
import styles from './AuthForm.module.scss';
import clsx from 'clsx';

interface AuthT {
  title: string;
  onSubmit: () => void;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export const AuthForm: React.FC<AuthT> = ({ title, onSubmit, children, footer, className, ...props }) => {
  return (
    <div className={clsx(styles.containerForm, className)} {...props}>
      <h1>{title}</h1>
      <form className={styles.form} onSubmit={onSubmit}>
        {children}
      </form>
      <div className={styles.footerForm}>{footer}</div>
    </div>
  );
};

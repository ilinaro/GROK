import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';
import { Header, Navigate } from '@components/specific';
import { ErrorFallback } from '@utils/ErrorFallback';
import styles from './ProfileLayout.module.scss';
import { ToggleTheme } from '@components/specific/Toggle';

type ProfileLayoutT = {
  children?: React.ReactNode;
};

export const ProfileLayout: React.FC<ProfileLayoutT> = ({ children }) => {
  return (
    <div className={styles.ProfileLayout}>
      <ToggleTheme />
      <div className={styles.Head}>
        <Header />
      </div>
      <div className={styles.Body}>
        <div className={styles.Navigate}>
          <Navigate />
        </div>
        <div className={styles.Outlet}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Outlet />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

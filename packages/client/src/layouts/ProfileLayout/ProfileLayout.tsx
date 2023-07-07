import { Header, Navigate } from '@components/specific';

import { Outlet } from 'react-router-dom';
import styles from './ProfileLayout.module.scss';

type ProfileLayoutT = {
  children?: React.ReactNode;
};

export const ProfileLayout: React.FC<ProfileLayoutT> = ({ children }) => {
  return (
    <div className={styles.ProfileLayout}>
      <div className={styles.Head}>
        <Header />
      </div>
      <div className={styles.Body}>
        <div className={styles.Navigate}>
          <Navigate />
        </div>
        <div className={styles.Outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

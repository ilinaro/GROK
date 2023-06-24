import styles from './ProfileLayout.module.scss';

type ProfileLayoutT = {
  children: React.ReactNode;
};

export const ProfileLayout: React.FC<ProfileLayoutT> = ({ children }) => {
  return <div className={styles.ProfileLayout}>{children}</div>;
};

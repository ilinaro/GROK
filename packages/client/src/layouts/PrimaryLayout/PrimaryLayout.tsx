import styles from './PrimaryLayout.module.scss';

type PrimaryLayoutT = {
  children: React.ReactNode;
};

export const PrimaryLayout: React.FC<PrimaryLayoutT> = ({ children }) => {
  return <div className={styles.PrimaryLayout}>{children}</div>;
};

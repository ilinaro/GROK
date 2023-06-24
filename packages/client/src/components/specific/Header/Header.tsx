import styles from './Header.module.scss';

type HeaderT = {};

export const Header: React.FC<HeaderT> = () => {
  return <div className={styles.Header}>Header</div>;
};

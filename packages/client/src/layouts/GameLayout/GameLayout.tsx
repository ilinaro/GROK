import styles from './GameLayout.module.scss';

type GameLayoutT = {
  children: React.ReactNode;
};

export const GameLayout: React.FC<GameLayoutT> = ({ children }) => {
  return <div className={styles.GameLayout}>{children}</div>;
};

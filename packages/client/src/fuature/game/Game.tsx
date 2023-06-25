import { Ball } from '@components/specific/Ball';
import { Link } from 'react-router-dom';
import styles from './Game.module.scss';

type GameT = {};

export const Game: React.FC<GameT> = () => {
  return (
    <div className={styles.Game}>
      <Link to="/">
        <div className={styles.Pause}>ПАУЗА</div>
      </Link>
      <div className={styles.Ball}>
        <Ball />
      </div>
    </div>
  );
};

import { Link } from 'react-router-dom';
import styles from './Game.module.scss';
import { useLayoutCanvas } from './hook';

type GameT = {};

export const Game: React.FC<GameT> = () => {
  const canvasRef = useLayoutCanvas();

  return (
    <div className={styles.Game}>
      <Link to="/">
        <div className={styles.Pause}>ПАУЗА</div>
      </Link>
      <canvas ref={canvasRef} />
    </div>
    //     {/* <Ball />    </div> */}
    //   <div className={styles.Ball}>
  );
};

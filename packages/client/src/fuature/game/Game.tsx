import { useEffect, useState } from 'react';

import { HealtSVG } from '@components/design-system';
import { MenuGame } from './components';
import { Pause } from '@phosphor-icons/react';
import { WindowCanvas } from './scene';
import styles from './Game.module.scss';
import { useAppSelector } from '@store/hooks';

type GameT = {};

export const Game: React.FC<GameT> = () => {
  const [menu, setMenu] = useState(false);
  const [end, setEnd] = useState(false);
  const [lavel, setLavel] = useState(0);
  const [count, setCount] = useState(100500);
  const [status, setStatus] = useState<'pause' | 'end' | 'geme_over'>('pause');
  const canvasRef = WindowCanvas();

  const { bonus: bonusStore } = useAppSelector((store) => store.game);
  const { life: lifeStore } = useAppSelector((store) => store.game);

  const ALL_LAVEL = 10;

  useEffect(() => {
    if (lifeStore === 0 || lifeStore < 1) {
      setCount(bonusStore);
      setStatus('geme_over');
      setMenu(true);
      return;
    }
    if (bonusStore < 2 && lifeStore > 1) {
      setStatus('pause');
    }
  }, [lifeStore]);

  useEffect(() => {
    if (bonusStore === 2 || bonusStore > 2) {
      setStatus('end');
      setCount(bonusStore);
      setMenu(true);
      return;
    }
    if (bonusStore < 2 && lifeStore > 1) {
      setStatus('pause');
    }
  }, [bonusStore]);

  const handleOpenPause = () => {
    setMenu(true);
    // setStatus('pause');
  };

  const handleCloseMenu = () => {
    setEnd(false);
    setMenu(false);
  };

  const handleOnNext = () => {
    setLavel((prev) => prev + 1);
    setMenu(false);
    setEnd(true);
  };

  const handleOnRestart = () => {
    setMenu(false);
  };

  return (
    <div className={styles.Game}>
      <div className={styles.Pause} onClick={handleOpenPause}>
        <Pause size={32} />
      </div>
      <div className={styles.Healt}>
        <HealtSVG />
      </div>
      {/* {typeof window === 'undefined' && <canvas ref={canvasRef} />} */}
      {menu && (
        <MenuGame
          onClose={handleCloseMenu}
          open={menu}
          end={end}
          count={count}
          status={status}
          onRestart={handleOnRestart}
          onNext={handleOnNext}
        />
      )}
    </div>
  );
};

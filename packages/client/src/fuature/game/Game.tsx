import { useEffect, useState } from 'react';

import { BounceSVG } from '@components/design-system/SVG/BounceSVG/BounceSVG';
import { MenuGame } from './components';
import { Pause } from '@phosphor-icons/react';
import { PortSVG } from '@components/design-system';
import { Subheader } from '@components/design-system/Fonts';
import { WindowCanvas } from './scene';
import styles from './Game.module.scss';
import { useAppSelector } from '@store/hooks';

type GameT = {};

export const Game: React.FC<GameT> = () => {
  const { bonus: bonusStore } = useAppSelector((store) => store.game);
  const { life: lifeStore } = useAppSelector((store) => store.game);
  const { score: scoreStore } = useAppSelector((store) => store.game);

  console.log(scoreStore);
  const canvasRef = WindowCanvas();

  const [menu, setMenu] = useState(false);
  const [end, setEnd] = useState(false);
  const [lavel, setLavel] = useState(0);
  const [status, setStatus] = useState<'pause' | 'end' | 'geme_over'>('pause');
  const [isLife, setIsLife] = useState<React.ReactElement[] | []>(Array(lifeStore).fill(<BounceSVG />));

  const ALL_LAVEL = 10;

  useEffect(() => {
    if (lifeStore !== undefined && lifeStore < 1) {
      setStatus('geme_over');
      setMenu(true);
      return;
    }
  }, [lifeStore]);

  useEffect(() => {
    if (bonusStore !== undefined && bonusStore < 1) {
      setStatus('end');
      setMenu(true);
      return;
    }
  }, [bonusStore]);

  const handleOpenPause = () => {
    setMenu(true);
    setStatus('pause');
  };

  const handleCloseMenu = () => {
    setEnd(false);
    setMenu(false);
    setStatus('pause');
  };

  const handleOnNext = () => {
    setLavel((prev) => prev + 1);
    setMenu(false);
    setEnd(true);
    setStatus('pause');
  };

  const handleOnRestart = () => {
    setMenu(false);
    setStatus('pause');
  };

  useEffect(() => {
    if (!lifeStore) {
      setIsLife([]);
    }
    if (lifeStore) {
      setIsLife(Array(lifeStore).fill(<BounceSVG />));
    }
  }, [lifeStore]);

  return (
    <div className={styles.Game}>
      <div className={styles.Pause} onClick={handleOpenPause}>
        <Pause size={32} />
      </div>
      <div className={styles.Healt}>
        <div className={styles.Port}>
          <PortSVG bonus={bonusStore} />
        </div>
        <div className={styles.Life}>
          {!!isLife.length && isLife?.map((life: React.ReactElement, i: number) => <div key={i}>{life}</div>)}
        </div>
        <div className={styles.Count}>
          <Subheader>{scoreStore}</Subheader>
        </div>
      </div>
      <canvas ref={canvasRef} />
      {menu && (
        <MenuGame
          onClose={handleCloseMenu}
          open={menu}
          end={end}
          count={scoreStore ?? 0}
          status={status}
          onRestart={handleOnRestart}
          onNext={handleOnNext}
        />
      )}
    </div>
  );
};

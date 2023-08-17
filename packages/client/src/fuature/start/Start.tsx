import { BodyNormal, Title } from '@components/design-system/Fonts';
import { Question, XCircle } from '@phosphor-icons/react';

import { Ball } from '@components/specific/Ball';
import { Link } from 'react-router-dom';
import { Performance } from './components';
import clsx from 'clsx';
import styles from './Start.module.scss';
import { useState } from 'react';

type StartT = {};

export const Start: React.FC<StartT> = () => {
  const [openInfo, setOpenInfo] = useState(false);

  const handleOpen = () => {
    setOpenInfo(true);
  };

  const handleClose = () => {
    setOpenInfo(false);
  };

  return (
    <div className={styles.content}>
      {!openInfo ? (
        <>
          <div className={styles.question} onClick={handleOpen}>
            {typeof window !== 'undefined' && <Question size={32} />}
          </div>
          <div className={clsx({ [styles.performance]: openInfo }, { [styles.next]: !openInfo })}>
            <Link to="/game">
              <div className={styles.start}>
                <Ball />
                <Title>НАЧАТЬ ИГРУ</Title>
              </div>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className={styles.question} onClick={handleClose}>
            {/* {typeof window !== 'undefined' && <XCircle size={32} />} */}
          </div>
          <Performance onClose={handleClose} />
        </>
      )}
    </div>
  );
};

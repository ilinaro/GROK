import { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Title } from '@components/design-system/Fonts';
import { Ball } from '@components/specific/Ball';
import { Performance } from './components';
import styles from './Start.module.scss';
import { Question, XCircle } from '@phosphor-icons/react';

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
            <Question size={32} />
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
            <XCircle size={32} />
          </div>
          <Performance onClose={handleClose} />
        </>
      )}
    </div>
  );
};

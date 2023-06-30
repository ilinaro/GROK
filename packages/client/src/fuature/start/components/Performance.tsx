import { ArrowCircleLeft, ArrowCircleRight, ArrowCircleUp } from '@phosphor-icons/react';
import { BodyBold, Subheader, Title } from '@components/design-system/Fonts';
import { useEffect, useState } from 'react';

import { Ball } from '@components/specific/Ball';
import clsx from 'clsx';
import styles from './Performance.module.scss';

type PerformanceT = {
  onClose: () => void;
};

export const Performance: React.FC<PerformanceT> = ({ onClose }) => {
  const [start, setStart] = useState(false);
  const [count, setCount] = useState(0);

  const handleToggle = () => {
    setStart((prev) => !prev);
  };
  useEffect(() => {
    if (count === 1) handleToggle(); // off

    if (count === 2) handleToggle(); // on
    if (count === 5) handleToggle(); // off

    if (count === 6) handleToggle(); // on
    if (count === 14) handleToggle(); // off

    if (count === 15) handleToggle(); // on
    if (count === 22) handleToggle(); // off

    if (count > 22) {
      onClose();
      return;
    }
    const animationTimeout = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1500);
    return () => {
      clearTimeout(animationTimeout);
    };
  }, [count]);

  return (
    <>
      {count <= 1 && (
        <div className={clsx({ [styles.performance]: start }, { [styles.next]: !start })}>
          <Title>Представление GROK</Title>
        </div>
      )}

      {count >= 2 && count <= 5 && (
        <div className={clsx({ [styles.performance]: start }, { [styles.next]: !start })}>
          <div className={styles.contentCentr}>
            <Subheader>
              В этой игре игроку необходимо управлять шариком, чтобы он не попал на опасные препятствия.
            </Subheader>
            <div>
              <Ball />
            </div>
          </div>
        </div>
      )}

      {count >= 6 && count <= 14 && (
        <div className={clsx({ [styles.performance]: start }, { [styles.next]: !start })}>
          <div className={styles.contentCentr}>
            <Subheader>
              Цель игры заключается в том, чтобы собрать порталы проходя лабиринт. Игрок может управлять платформой
              нажимая клавиши на клавиатуре влево или вправо. Если у шарика закочатся жизни, игра заканчивается.
            </Subheader>
            <div>
              <ArrowCircleLeft size={64} />
              <ArrowCircleUp size={64} />
              <ArrowCircleRight size={64} />
            </div>
          </div>
        </div>
      )}

      {count >= 15 && count <= 22 && (
        <div className={clsx({ [styles.performance]: start }, { [styles.next]: !start })}>
          <div className={styles.contentCentr}>
            <Subheader>
              Игроку предстоит пройти свозь трудные препятствия, собрать все порталы и найти выход. В начале игры,
              игроку дается 3 жизни, их может пополнить, если найдет секретные места в лабиринте.
            </Subheader>
          </div>
        </div>
      )}
    </>
  );
};

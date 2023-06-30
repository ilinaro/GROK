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

  const performanceData = [
    {
      content: (
        <div className={clsx({ [styles.performance]: start }, { [styles.next]: !start })}>
          <Title>Представление GROK</Title>
        </div>
      ),
    },
    {
      content: (
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
      ),
    },
    {
      content: (
        <div className={clsx({ [styles.performance]: start }, { [styles.next]: !start })}>
          <div className={styles.contentCentr}>
            <Subheader>
              Цель игры заключается в том, чтобы собрать порталы проходя лабиринт.
              <br />
              Игрок может управлять платформой нажимая клавиши на клавиатуре влево или вправо. Если у шарика закочатся
              жизни, игра заканчивается.
            </Subheader>
            <div>
              <ArrowCircleLeft size={64} />
              <ArrowCircleUp size={64} />
              <ArrowCircleRight size={64} />
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className={clsx({ [styles.performance]: start }, { [styles.next]: !start })}>
          <div className={styles.contentCentr}>
            <Subheader>
              Игроку предстоит пройти свозь трудные препятствия, собрать все порталы и найти выход. <br />В начале игры,
              игроку дается 3 жизни, их может пополнить, если найдет секретные места в лабиринте.
            </Subheader>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (count > 22) {
      onClose();
      return;
    }

    if (count === 1) handleToggle(); // off

    if (count === 3) handleToggle(); // on
    if (count === 8) handleToggle(); // off

    if (count === 10) handleToggle(); // on
    if (count === 14) handleToggle(); // off

    if (count === 16) handleToggle(); // on
    if (count === 21) handleToggle(); // off

    const animationTimeout = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearTimeout(animationTimeout);
    };
  }, [count]);

  return (
    <>
      {count < 2 && performanceData[0].content}
      {count >= 2 && count < 9 && performanceData[1].content}
      {count >= 9 && count < 15 && performanceData[2].content}
      {count >= 15 && count < 22 && performanceData[3].content}
    </>
  );
};

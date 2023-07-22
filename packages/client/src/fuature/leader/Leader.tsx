import { Title } from '@components/design-system/Fonts';
import styles from './Leader.module.scss';
import { leadersMock } from './mocks';
import { BlockLeader } from './components/block-leader/BlockLeader';

type LeaderT = {};

export const Leader: React.FC<LeaderT> = () => (
  <div className={styles.Wrapper}>
    <Title weight={'bold'}>Лидеры</Title>
    {leadersMock.map((leader, index) => {
      // Исходи из того что лидеры уже отсортированы на бэке по очкам
      const currentPlace = index + 1;

      return (
        <BlockLeader
          key={index}
          avatar={leader.avatar}
          username={leader.username}
          points={leader.points}
          place={currentPlace}
        />
      );
    })}
  </div>
);

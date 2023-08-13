import { useMemo } from 'react';
import { Title } from '@components/design-system/Fonts';
import styles from './Leader.module.scss';
import { BlockLeader } from './components/block-leader/BlockLeader';
import { useQuery } from 'react-query';
import { getStatistics } from '@services/game.service';
import { formatLeaderBoard } from '@utils/formatters';

type LeaderT = {};

export const Leader: React.FC<LeaderT> = () => {
  const { isLoading, data, error } = useQuery('getLeaderBoard', () =>
    getStatistics({
      ratingFieldName: 'GROKpoints',
      cursor: 0,
      limit: 5,
    })
  );

  const leaders = useMemo(() => formatLeaderBoard(data), [data]);

  return (
    <div className={styles.Wrapper}>
      <Title weight={'bold'}>Лидеры</Title>
      {leaders.map((leader, index) => {
        const currentPlace = index + 1;

        console.log(leader);

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
};

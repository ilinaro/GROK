import React from 'react';
import styles from './BlockLeader.module.scss';
import { Subheader } from '@components/design-system/Fonts';
import clsx from 'clsx';

interface IBlockLeader {
  avatar: string;
  username: string;
  points: number;
  place: number;
}

export const BlockLeader: React.FC<IBlockLeader> = ({ avatar, username, points, place }) => {
  const isFirstPlace = place === 1;

  return (
    <div className={clsx(styles.Container, { [styles.Winner]: isFirstPlace })}>
      <picture className={styles.Avatar}>
        <img src={avatar} alt="avatar" />
      </picture>
      <Subheader className={styles.Username} weight={'bold'}>
        {place}. {username}
      </Subheader>
      <Subheader weight={'bold'}>{points}</Subheader>
      {isFirstPlace && <div className={styles.TopPlace}></div>}
    </div>
  );
};

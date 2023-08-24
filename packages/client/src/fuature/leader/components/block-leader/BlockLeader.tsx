import React from 'react';
import styles from './BlockLeader.module.scss';
import { Subheader } from '@components/design-system/Fonts';
import clsx from 'clsx';
import { AvatarSVG } from '@components/design-system';

interface IBlockLeader {
  avatar: string;
  username: string;
  points: number;
  place: number;
}

export const BlockLeader: React.FC<IBlockLeader> = ({ avatar, username, points, place }) => {
  const isFirstPlace = place === 1;

  return (
    <div data-testid={'container'} className={clsx(styles.Container, { [styles.Winner]: isFirstPlace })}>
      <picture className={styles.Avatar}>
        {avatar ? (
          <img src={`https://ya-praktikum.tech/api/v2/resources/${avatar}`} alt="avatar" />
        ) : (
          <AvatarSVG width={64} />
        )}
      </picture>
      <Subheader data-testid={'username'} className={styles.Username} weight={'bold'}>
        <Subheader>{place}. </Subheader>
        <Subheader>{username}</Subheader>
      </Subheader>
      <Subheader weight={'bold'}>{points}</Subheader>
      {isFirstPlace && <div data-testid={'top-place'} className={styles.TopPlace}></div>}
    </div>
  );
};

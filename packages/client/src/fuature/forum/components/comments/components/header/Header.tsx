import React from 'react';
import styles from './Header.module.scss';
import { Title } from '@components/design-system/Fonts';

interface IHeader {
  title: string;
}

export const Header: React.FC<IHeader> = ({ title }) => {
  return (
    <div className={styles.Header}>
      <div className={styles.topic__info}></div>
      <div className={styles.topic}>
        <Title className={styles.title}>{title}</Title>
      </div>
    </div>
  );
};

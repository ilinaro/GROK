import styles from './Nav.module.scss';
import React from 'react';
import { NavElements } from './NavElements/NavElements'

type ForumNavT = {};

export const ForumNav: React.FC<ForumNavT> = () => {
  return (

    <nav className={styles.ForumNavWrap}>
      <ul className={styles.ForumNavList}>
        <NavElements/>
      </ul>
    </nav>

  );
};

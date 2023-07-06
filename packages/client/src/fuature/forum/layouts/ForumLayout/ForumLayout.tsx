import styles from './ForumLayout.module.scss';
import { ForumNav } from '../../components/nav';
import React from 'react';

type ForumLayoutT = {
  children?: React.ReactNode;
};

export const ForumLayout: React.FC<ForumLayoutT> = ({ children }) => {
  return (
    <main className={styles.ForumMain}>
      <div className={styles.LeftSide}></div>
      <div className={styles.RightSide}></div>
      <article className={styles.ForumWrapper}>
        <h1 className={styles.ForumTitle}>Форум</h1>
        <ForumNav/>
        <article className={styles.ForumFrame}>
          { children }
        </article>
      </article>
    </main>
  );
};

import styles from './ForumLayout.module.scss';
import { ForumNav } from '../../components/nav';
import React from 'react';
import { FullScreen } from '../../components/fullscreen';

type ForumLayoutT = {
  children?: React.ReactNode;
  props?: React.ComponentProps<any>;
};

export const ForumLayout: React.FC<ForumLayoutT> = ({ children }) => {
  return (
    <main className={styles.ForumMain}>
      <div className={styles.LeftSide}></div>
      <FullScreen />
      <div className={styles.RightSide}></div>
      <article className={styles.ForumWrapper}>
        <h1 className={styles.ForumTitle}>Форум</h1>
        <ForumNav />
        <article className={styles.ForumFrame}>{children}</article>
      </article>
    </main>
  );
};

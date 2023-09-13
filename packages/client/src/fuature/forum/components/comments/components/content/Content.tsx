import React from 'react';
import styles from './Content.module.scss';
import { Comment } from '@api/forum/types';
import { CommentItem } from '../comment';

interface IContent {
  comments?: Comment[];
}

export const Content: React.FC<IContent> = ({ comments }) => {
  if (!comments) {
    return (
      <div className={styles.content__wrap}>
        <div className={styles.content__content}>
          <p className={styles.content__text}>Нет комментариев</p>
        </div>
      </div>
    );
  }

  return (
    <ul className={styles.content__list}>
      {comments?.map((comment) => (
        <li className={styles.content__item} key={comment.id}>
          <CommentItem comment={comment} />
        </li>
      ))}
    </ul>
  );
};

import React from 'react';
import styles from './Comment.module.scss';
import { Comment } from '@api/forum/types';
import { dateParser } from '@utils/date-parser';

interface IComment {
  comment: Comment;
}

export const CommentItem: React.FC<IComment> = ({ comment }) => {
  const date = dateParser(new Date(comment.created_at).toISOString());

  return (
    <div className={styles.comments__wrap}>
      <div className={styles.comment__wrap}>
        <div className={styles.comment__head}>
          <p className={styles.comment__time}>{date}</p>
        </div>
        <div className={styles.comment__content}>
          <p className={styles.comment__text}>{comment.text}</p>
        </div>
      </div>
    </div>
  );
};

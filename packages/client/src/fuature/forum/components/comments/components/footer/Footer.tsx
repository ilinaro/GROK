import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import styles from './Footer.module.scss';
import { Title } from '@components/design-system/Fonts';
import { Button } from '@components/design-system';
import { useNotification } from '../../../../hooks/useNotification';
import { CreateCommentRequest } from '@api/forum/types';
import { forumApi } from '@api/forum';

interface IFooter {
  topicId: number;
}

export const Footer: React.FC<IFooter> = ({ topicId }) => {
  const { notify } = useNotification();
  const [comment, setComment] = useState('');

  const queryClient = useQueryClient();

  const addComment = async () => {
    if (comment) {
      const createCommentData: CreateCommentRequest = {
        action: 'message.create',
        data: {
          topic_id: topicId,
          parent_message_id: 0,
          text: comment,
        },
      };

      try {
        await forumApi.addComment(createCommentData);

        notify('Добавлен новый комментарий! - ' + comment);
        setComment('');

        queryClient.invalidateQueries(['comments']);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.comment__footer}>
      <Title className={styles.comment_add__title}>Оставить комментарий</Title>
      <form className={styles.comment_add__form}>
        <textarea
          className={styles.comment__textaria}
          name="comment"
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button className={styles.comment_add__btn} type="button" onClick={addComment}>
          Добавить
        </Button>
      </form>
    </div>
  );
};

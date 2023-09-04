import React, { useState } from 'react';
import styles from './CreateTopic.module.scss';
import { Button } from '@components/design-system';
import { BodyNormal } from '@components/design-system/Fonts';
import { useNotification } from '../../hooks/useNotification';
import { CreateTopicRequest } from '@api/forum/types';
import { forumApi } from '@api/forum';

interface ICreateTopic {
  forumId: number;
}

export const CreateTopic: React.FC<ICreateTopic> = ({ forumId }) => {
  const { notify } = useNotification();

  const [topic, setTopic] = useState('');

  const addTopic = async () => {
    if (topic) {
      const createTopicData: CreateTopicRequest = {
        action: 'topic.create',
        data: {
          forum_id: forumId,
          name: topic,
        },
      };

      try {
        await forumApi.createTopic(createTopicData);

        notify('Создан новый топик: ' + topic);

        setTopic('');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form className={styles.topic__form} onSubmit={addTopic}>
      <div className={styles.topic__container}>
        <label className={styles.topic__title}>Название</label>
        <textarea name="topic" required value={topic} onChange={(e) => setTopic(e.target.value)} />
      </div>
      <Button className={styles.topic_btn__create} type="button" onClick={addTopic}>
        <BodyNormal weight={'normal'}>Создать</BodyNormal>
      </Button>
    </form>
  );
};

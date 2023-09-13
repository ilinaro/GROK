import React from 'react';
import styles from './TopicItem.module.scss';
import { Link } from 'react-router-dom';
import { Topic } from '@api/forum/types';
import { dateParser } from '@utils/date-parser';

interface ITopicItem {
  topic: Topic;
  index: number;
}

export const TopicItem: React.FC<ITopicItem> = (props) => {
  const { topic, index } = props;

  const createdAt = dateParser(new Date(topic.created_at).toISOString());

  return (
    <div itemID={topic.id.toString()} className={styles.topicsWrapper}>
      <div className={styles.leftSide}>
        <Link to={`topics/${topic.forum_id}/${topic.id}`}>
          <h1 className={styles.subj__title}>
            {index + 1}. {topic.name}
          </h1>
        </Link>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.subj__profileEnv}>
          <p className={styles.subj__desc}>{`Дата создания: ${createdAt}`}</p>
        </div>
      </div>
    </div>
  );
};

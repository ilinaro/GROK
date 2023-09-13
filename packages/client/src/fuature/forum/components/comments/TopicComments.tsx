import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './TopicComments.module.scss';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { GetCommentsListRequest, GetListTopicRequest } from '@api/forum/types';
import { useQuery } from 'react-query';
import { forumApi } from '@api/forum';

export const TopicComments: React.FC = () => {
  const { pathname } = useLocation();

  const forumId = pathname.split('topics/')[1].split('/')[0];
  const topicId = pathname.split('topics/')[1].split('/')[1];

  const getListTopicData: GetListTopicRequest = {
    action: 'topic.list',
    data: { forum_id: Number(forumId) },
  };

  const { data: topics } = useQuery(['topics'], async () => {
    const topics = await forumApi.getListTopic(getListTopicData);
    return topics;
  });

  const topic = topics?.find((t) => t.id === Number(topicId));

  // const testTopic: Topic = {
  //   id: 1,
  //   name: 'Топик 1',
  //   forum_id: Number(forumId),
  //   user_id: 111111,
  //   created_at: 123123123,
  // };

  if (!topic) {
    return <div className={styles.TopicCommentsWrapper}>Тема не найдена</div>;
  }

  const getCommentsListData: GetCommentsListRequest = {
    action: 'message.list',
    data: { topic_id: topic?.id ?? 1, parent_message_id: 0 },
  };

  const { data: comments } = useQuery(['comments'], async () => {
    const comments = await forumApi.getCommentsList(getCommentsListData);
    return comments;
  });

  // const testComments: Comment[] = [
  //   {
  //     id: 1,
  //     created_at: 123123,
  //     parent_message_id: 0,
  //     text: 'adadsfasdfafgafg',
  //     topic_id: 1,
  //     user_id: 111111,
  //   },
  //   {
  //     id: 2,
  //     created_at: 223123,
  //     parent_message_id: 1,
  //     text: 'FFFFFFFFFFFF',
  //     topic_id: 1,
  //     user_id: 111112,
  //   },
  //   {
  //     id: 3,
  //     created_at: 323123,
  //     parent_message_id: 0,
  //     text: 'FfFfFfFfFfFfFf',
  //     topic_id: 1,
  //     user_id: 111113,
  //   },
  // ];

  return (
    <div className={styles.TopicCommentsWrapper}>
      <Header title={topic.name ?? 'название темы'} />
      <Content comments={comments} />
      <Footer topic_id={topic.id} />
    </div>
  );
};

import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './TopicComments.module.scss';
import { ForumLayout } from '../../layouts/ForumLayout';
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
    return await forumApi.getListTopic(getListTopicData);
  });

  const topic = topics?.find((t) => t.id === Number(topicId));

  if (!topic) {
    return <div>Тема не найдена</div>;
  }

  const getCommentsListData: GetCommentsListRequest = {
    action: 'message.list',
    data: { topic_id: topic?.id ?? 1, parent_message_id: 0 },
  };

  const { data: comments } = useQuery(['comments'], async () => {
    return await forumApi.getCommentsList(getCommentsListData);
  });

  return (
    <ForumLayout>
      <div className={styles.wrapper}>
        <Header title={topic.name ?? 'название топика'} />
        <Content comments={comments} />
        <Footer topicId={topic.id} />
      </div>
    </ForumLayout>
  );
};

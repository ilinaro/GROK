import React from 'react';
import { useQuery } from 'react-query';
import { ForumLayout } from '../../layouts/ForumLayout';
import { forumApi } from '@api/forum';
import { GetListTopicRequest, Topic } from '@api/forum/types';

export const ForumTopics: React.FC = () => {
  const forumQuery = useQuery(['forum'], async () => {
    const forums = await forumApi.getForumsList({ action: 'forum.list', data: {} });
    return forums?.[0];
  });

  const forum = forumQuery.data;

  if (!forum) {
    return <div>Форумов ещё нет</div>;
  }

  const forumId = forum ? forum.id : 1;

  const topicsData: Topic[] = [
    {
      id: 1,
      name: 'Какие игры сейчас популярны',
      user_id: 1,
      forum_id: forumId,
      created_at: 322323,
    },
    {
      id: 2,
      name: 'Го играть',
      user_id: 1,
      forum_id: forumId,
      created_at: 322323,
    },
    {
      id: 3,
      name: 'Я доделал форум)',
      user_id: 1,
      forum_id: forumId,
      created_at: 322323,
    },
  ];

  const getListTopicData: GetListTopicRequest = {
    action: 'topic.list',
    data: { forum_id: forumId },
  };

  const { data: topics } = useQuery(['topics'], async () => {
    return await forumApi.getListTopic(getListTopicData);
  });

  if (!topics) return null;

  return <ForumLayout>{/* <TopicElements topics={topicsData} /> */}</ForumLayout>;
};

import React from 'react';
import { useQuery } from 'react-query';
import { ForumLayout } from '../../layouts/ForumLayout';
import { CreateTopic } from '../../components/CreateTopic';
import { forumApi } from '@api/forum';

export const ForumActionCreate: React.FC = () => {
  const forumQuery = useQuery(['forum'], async () => {
    const forums = await forumApi.getForumsList({ action: 'forum.list', data: {} });
    return forums?.[0];
  });

  const forum = forumQuery.data;

  if (!forum) return null;

  return (
    <ForumLayout>
      <CreateTopic forumId={forum?.id ?? 1} />
    </ForumLayout>
  );
};

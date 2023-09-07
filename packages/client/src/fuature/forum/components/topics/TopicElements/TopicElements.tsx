import React from 'react';
import { TopicItem } from '../TopicItem';
import { Topic } from '@api/forum/types';
import { useQuery } from 'react-query';
import { forumApi } from '@api/forum';
import { CreateTopic } from '../CreateTopic';

interface ITopicElements {
  forum_id: number;
}

export const TopicElements: React.FC<ITopicElements> = ({ forum_id }) => {
  const [currentTopics, setCurrentTopics] = React.useState<Topic[] | undefined>(undefined);

  const topicsQuery = useQuery(['topics'], async () => {
    const topics = await forumApi.getListTopic({ action: 'topic.list', data: { forum_id } });
    return topics;
  });

  const topics = topicsQuery.data;

  // const testTopics: Topic[] = [
  //   {
  //     id: 1,
  //     name: 'Топик 1',
  //     forum_id,
  //     user_id: 111111,
  //     created_at: 123123123,
  //   },
  //   {
  //     id: 2,
  //     name: 'Топик 2',
  //     forum_id,
  //     user_id: 111111,
  //     created_at: 1231231231231231,
  //   },
  // ];

  React.useEffect(() => {
    if (topics) {
      setCurrentTopics(topics);
    }
  }, [topics]);

  return (
    <>
      <CreateTopic forum_id={forum_id} />
      {topics?.map((topic, index) => (
        <TopicItem topic={topic} index={index} />
      ))}
    </>
  );
};

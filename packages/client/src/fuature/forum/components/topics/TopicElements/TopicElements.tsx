import React from 'react';
import { TopicItem } from '../TopicItem';
import { Topic } from '@api/forum/types';

interface ITopicElements {
  topics: Topic[];
}

export const TopicElements: React.FC<ITopicElements> = ({ topics }) => {
  return (
    <>
      {topics.map((topic, index) => (
        <TopicItem topic={topic} index={index} />
      ))}
    </>
  );
};

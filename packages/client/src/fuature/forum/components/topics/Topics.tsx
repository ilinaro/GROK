import React from 'react'
import { ForumLayout } from '../../layouts/ForumLayout';
import { TopicElements } from './TopicElements'

export const ForumTopics: React.FC = () => {
  return (
    <ForumLayout>
      <TopicElements />
    </ForumLayout>
  );
};

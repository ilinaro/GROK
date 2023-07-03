import React from 'react'
import { ForumLayout } from '../../layouts/ForumLayout';
import { TopicElements } from './TopicElements'


type ForumTopicsT = {};
export const ForumTopics: React.FC<ForumTopicsT> = () => {

  return (
    <ForumLayout>

      <TopicElements/>

    </ForumLayout>

  );
};





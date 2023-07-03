import React from 'react';
import { ForumLayout } from '../../layouts/ForumLayout';
import { AnswerElements } from './AnswerElements/AnswerElements'

type ForumAnswersT = {};
export const ForumAnswers: React.FC<ForumAnswersT> = () => {

  return (
    <ForumLayout>
      <AnswerElements/>
    </ForumLayout>

  );
};





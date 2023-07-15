import React from 'react';
import { ForumLayout } from '../../layouts/ForumLayout';
import { AnswerElements } from './AnswerElements';

export const ForumAnswers: React.FC = () => {
  return (
    <ForumLayout>
      <AnswerElements />
    </ForumLayout>
  );
};

import { ForumEvents } from 'fuature/forum-events';
import React from 'react';

type ForumEventsPageT = {};

export const ForumEventsPage: React.FC<ForumEventsPageT> = (props) => {
  return <ForumEvents data={ props } />;
};

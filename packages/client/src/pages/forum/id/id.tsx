import { ForumEvents } from 'fuature/forum-events';

type ForumEventsPageT = {};

export const ForumEventsPage: React.FC<ForumEventsPageT> = (props) => {
  return <ForumEvents data={ props }/>;
};

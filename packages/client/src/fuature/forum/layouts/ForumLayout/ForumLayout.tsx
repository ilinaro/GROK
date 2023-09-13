import styles from './ForumLayout.module.scss';
import React from 'react';
import { FullScreen } from '../../components/fullscreen';
import { NotificationAPI } from '../../components/notification';
import { QueryClient, useQuery } from 'react-query';
import { forumApi } from '@api/forum';
import { Button } from '@components/design-system';
import { FormInput } from '@components/specific/FormInput/FormInput';
import { REQUIRED } from '@fuature/profile/constants';
import { useForm } from 'react-hook-form';
import { CreateForumRequest, Forum } from '@api/forum/types';
import { isServerSide } from '@lib/isServerSide';
import { TopicElements } from '@fuature/forum/components/topics/TopicElements';

type ForumLayoutT = {
  children?: React.ReactNode;
  props?: React.ComponentProps<any>;
};

export const ForumLayout: React.FC<ForumLayoutT> = ({ children }) => {
  const { control, handleSubmit, reset } = useForm<CreateForumRequest>({ mode: 'all' });

  const queryClient = new QueryClient();

  const [currentForum, setCurrentForum] = React.useState<Forum | undefined>(undefined);

  const forumQuery = useQuery(['forum'], async () => {
    const forums = await forumApi.getForumsList({ action: 'forum.list', data: {} });
    return forums?.[0];
  });

  const forum = forumQuery.data;

  const onSubmit = async ({ data }: CreateForumRequest) => {
    try {
      await forumApi.createForum({
        action: 'forum.create',
        data: { name: data.name },
      });

      queryClient.invalidateQueries(['forum']);

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (forum) {
      setCurrentForum(forum);
    }
  }, [forum]);

  const testForum = {
    id: 1,
    name: '1',
    created_at: '',
    user_id: 1111111,
  };

  return (
    <main className={styles.ForumMain}>
      {!isServerSide && <NotificationAPI />}
      <div className={styles.LeftSide}></div>
      {!isServerSide && <FullScreen />}
      <div className={styles.RightSide}></div>
      <article className={styles.ForumWrapper}>
        <h1 className={styles.ForumTitle}>{currentForum?.name ?? 'Форум'}</h1>
        {testForum ? (
          <article className={styles.ForumFrame}>
            <TopicElements forum_id={testForum.id} />
          </article>
        ) : (
          <div className={styles.NoForumWrapper}>
            <div className={styles.NoForumText}>Нет созданных форумов</div>
            <form className={styles.ForumForm} onSubmit={handleSubmit(onSubmit)}>
              <FormInput
                //@ts-ignore
                control={control}
                name="data.name"
                label="Название форума"
                type="text"
                rules={{ required: { value: true, message: REQUIRED } }}
              />
              <Button type="submit" color="blue" size="medium">
                Создать
              </Button>
            </form>
          </div>
        )}
      </article>
    </main>
  );
};

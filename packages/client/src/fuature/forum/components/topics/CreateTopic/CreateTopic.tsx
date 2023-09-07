import React from 'react';
import styles from './CreateTopic.module.scss';
import { FormInput } from '@components/specific/FormInput/FormInput';
import { REQUIRED } from '@fuature/profile/constants';
import { Button } from '@components/design-system';
import { useForm } from 'react-hook-form';
import { CreateTopicRequest } from '@api/forum/types';
import { forumApi } from '@api/forum';
import { useQueryClient } from 'react-query';

interface ICreateTopic {
  forum_id: number;
}

export const CreateTopic: React.FC<ICreateTopic> = ({ forum_id }) => {
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset } = useForm<CreateTopicRequest>({ mode: 'all' });

  const onSubmit = async ({ data }: CreateTopicRequest) => {
    try {
      await forumApi.createTopic({
        action: 'topic.create',
        data: {
          forum_id,
          name: data.name,
        },
      });

      queryClient.invalidateQueries(['topics']);

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.CreateTopic}>
      <form className={styles.CreateTopicForm} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          //@ts-ignore
          control={control}
          name="data.name"
          label="Название темы"
          type="text"
          rules={{ required: { value: true, message: REQUIRED } }}
        />
        <Button type="submit" color="blue" size="medium">
          Создать
        </Button>
      </form>
    </div>
  );
};

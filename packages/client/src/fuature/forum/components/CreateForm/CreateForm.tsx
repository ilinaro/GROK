import React, { useState } from 'react';
import styles from './CreateForm.module.scss';
import { Button } from '@components/design-system';
import { BodyNormal } from '@components/design-system/Fonts';

type ForumCreateFormT = {};
export const ForumCreateForm: React.FC<ForumCreateFormT> = () => {

  const [topic, setTopic] = useState("");
  const [description, setDesc] = useState('');
  const createTopic = (e) => {
    e.preventDefault();
    console.log({ topic });
    setTopic("");
    createDescription(e);
  }
  const createDescription = (e) => {
    e.preventDefault();
    console.log({ description });
    setDesc("");
  }


  return (

    <form className={styles.topic__form} onSubmit={createTopic}>
      <div className={styles.topic__container}>
        <label>Название</label>
        <input
          type='text'
          name='topic'
          required value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <label>Описание</label>
        <textarea
          name='description'
          required value={description}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <Button className={styles.topic_btn__create} type="submit">
        <BodyNormal weight={'normal'}>Создать</BodyNormal>
      </Button>
    </form>
  )
};

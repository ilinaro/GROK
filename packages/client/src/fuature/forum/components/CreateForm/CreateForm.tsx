import React, { useEffect, useState } from 'react'
import styles from './CreateForm.module.scss';
import { Button } from '@components/design-system';
import { BodyNormal } from '@components/design-system/Fonts';
import { Simulate } from 'react-dom/test-utils'
import input = Simulate.input
import { NotificationAPI } from '../notification'
import { useNotification } from '../../hooks/useNotification'

export const ForumCreateForm: React.FC = (props) => {
  const { notify } = useNotification();
  const [topic, setTopic] = useState('');
  const [description, setDesc] = useState('');
  const createTopic = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTopic('');
    createDescription(e);
  };
  const createDescription = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDesc('');
  };
  return (

    <form className={styles.topic__form} onSubmit={ createTopic }>

      <div className={styles.topic__container}>
        <label>Название</label>
        <input type="text" name="topic" required value={ topic } onChange={(e) => setTopic(e.target.value)} />
        <label>Описание</label>
        <textarea name="description" required value={ description } onChange={(e) => setDesc(e.target.value)} />
      </div>
      <Button className={styles.topic_btn__create} type="submit" onClick={ () => notify("Создан новый топик: " + topic) }>
        <BodyNormal weight={'normal'}>Создать</BodyNormal>
      </Button>
    </form>
  );
};

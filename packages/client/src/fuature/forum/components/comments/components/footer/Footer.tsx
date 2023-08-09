import React, { useState } from 'react'
import styles from './Footer.module.scss'
import { Title } from '@components/design-system/Fonts'
import { Button } from '@components/design-system'

export const Footer:React.FC = () => {
  const [ comment, setComment ] = useState('');
  return (
    <div className={ styles.comment__footer }>
      <Title className={ styles.comment_add__title }>Оставить комментарий</Title>
      <form className={ styles.comment_add__form }>
          <textarea className={ styles.comment__textaria }
              name='comment'
              required value={ comment }
              onChange={ (e) => setComment(e.target.value) }
          >
          </textarea>
        <Button className={ styles.comment_add__btn } onClick={() => new Notification("Комментарий добавлен!")}>Добавить</Button>
      </form>
    </div>
  );
}

import React from 'react'
import styles from './Header.module.scss'
import { Title } from '@components/design-system/Fonts'

type HeaderT = {};

export const Header:React.FC<HeaderT> = () => {
  return (
    <div className={styles.Header}>
    <div className={ styles.topic__info }>
      <p className={ styles.username }>Username</p>
      <p className={ styles.time__topic }>Timestamp</p>
    </div>
    <div className={ styles.topic }>
      <Title className={ styles.title }>This is Topic tittle</Title>
      <textarea readOnly={ true } className={ styles.Desc }>this is descriptions posts</textarea>

    </div>

  </div>
  )
};

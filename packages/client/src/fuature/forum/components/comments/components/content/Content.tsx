import React from 'react';
import styles from './Content.module.scss';

export const Content:React.FC = () => {
  return (
    <div className={ styles.comments__wrap }>
      <div className={ styles.comment__wrap }>
        <div className={ styles.comment__head }>
          <p className={ styles.comment__user }>testtest</p>
          <p className={ styles.comment__time }>10 Jun 2023</p>
        </div>
        <div className={ styles.comment__content }>
          <span className={ styles.comment__avatar }></span>
          <p className={ styles.comment__text }>Привет, как дела? :)</p>
        </div>
      </div>
    </div>
  );
};

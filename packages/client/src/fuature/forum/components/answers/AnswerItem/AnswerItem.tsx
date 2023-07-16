import React from 'react';
import styles from './AnswerItem.module.scss';

type AnswerItemT = {
  answers: {
    desc: string;
    title: string;
    timestamp: string;
  };
};

export const AnswerItem: React.FC<AnswerItemT> = (props) => {
  const { answers } = props;
  return (
    <div className={styles.topicsWrapper}>
      <div className={styles.leftSide}>
        <h1 className={styles.subj__title}>{answers.title}</h1>
        <p className={styles.subj_desc}>{answers.desc}</p>
        <p className={styles.subj_desc}>{answers.desc}</p>
        <p className={styles.subj_desc}>{answers.desc}</p>
        <p className={styles.subj_desc}>{answers.desc}</p>
        <p className={styles.subj_desc}>{answers.desc}</p>
        <p className={styles.subj_desc}>{answers.desc}</p>
        <p className={styles.subj_desc}>{answers.desc}</p>
      </div>
    </div>
  );
};

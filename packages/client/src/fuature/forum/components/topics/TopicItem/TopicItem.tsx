import React from 'react'
import styles from './TopicItem.module.scss';
import { Link, Route, Router } from 'react-router-dom'
import { RouteNames } from '@routes/routeNames'
import { render } from 'react-dom'
import { ForumComments } from '../../comments'

type TopicsItemT = {};

export const TopicsItem: React.FC<TopicsItemT> = (props) => {

  const { topics } = props;

  return (
    <div itemID={topics.id} className={styles.topicsWrapper}>

      <div className={styles.leftSide}>
        <h1 className={styles.subj__title}>{topics.title}</h1>
        <p className={styles.subj_desc}>{topics.desc}</p>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.subj__countries}>

          <div className={styles.subj__icons}>
            <i className={styles.subj_icon__like}></i>
            <Link className={styles.subj_icon__addMsg} to={'/forum/' + topics.id}></Link>
          </div>
        </div>
        <div className={styles.subj__profileEnv}>

          <div className={styles.subj__avatar}></div>
          <div className={styles.subj__timestamp}>{topics.timestamp}</div>

        </div>
      </div>

    </div>
  )
}

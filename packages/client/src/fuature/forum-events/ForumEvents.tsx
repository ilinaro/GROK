import { BodyNormal } from '@components/design-system/Fonts';
import styles from '../forum/Forum.module.scss'
import { ForumNav } from '../forum/components/nav'
import React, { useState } from 'react'
import { ForumComments } from '../forum/components/comments'

type ForumEventsT = {};

export const ForumEvents: React.FC<ForumEventsT> = (props) => {

  return (
    <ForumComments/>



  );
};

import React from 'react';
import styles from './Comments.module.scss';
import { ForumLayout } from '../../layouts/ForumLayout';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';

export const ForumComments:React.FC = () => {
  return (
    <ForumLayout>
      <div className={ styles.wrapper }>
        <Header />
        <Content />
        <Footer />
      </div>
    </ForumLayout>
  )
}

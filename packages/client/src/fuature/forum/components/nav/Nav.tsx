import styles from './Nav.module.scss';
import React from 'react';
import { NavElements } from './NavElements/NavElements'

export const ForumNav: React.FC = () => {
  return (
    <nav className={ styles.ForumNavWrap }>
      <ul className={ styles.ForumNavList }>
        <NavElements />
      </ul>
    </nav>
  );
};

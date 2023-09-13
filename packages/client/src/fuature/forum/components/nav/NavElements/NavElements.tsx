import React from 'react';
import { NavItem } from '../NavItem/NavItem';

export const NavElements = () => {
  const navData = [
    { path: 'topics', name: 'Темы' },
    { path: 'create', name: 'Создать' },
  ];
  return (
    <>
      {navData.map((element) => (
        <NavItem data={element} key={element.name} />
      ))}
    </>
  );
};

import React from 'react';
import { AnswerItem } from '../AnswerItem'

export const AnswerElements = () => {
  const answersData = [
    { title: 'Какие игры сейчас популярны', desc: 'Dota, CS, CS:GO', timestamp: '10 янв 2023' },
    { title: 'Го играть', desc: 'Я бы сыграл в денди', timestamp: '30 июня 2023' },
    { title: 'Я доделал форум)', desc: 'Почти в дед лайн =)', timestamp: '01 июля 2023' },
  ];
  return (
    <>
      {
        answersData.map(element => <AnswerItem answers={element} />)
      }
    </>)
};

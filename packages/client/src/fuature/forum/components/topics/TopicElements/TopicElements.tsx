import React from 'react';
import { TopicsItem } from '../TopicItem';

export const TopicElements = () => {
  const topicsData = [
    { id: '1', title: 'Какие игры сейчас популярны', desc: 'Dota, CS, CS:GO', timestamp: '10 янв 2023' },
    { id: '2', title: 'Го играть', desc: 'Я бы сыграл в денди', timestamp: '30 июня 2023' },
    { id: '3', title: 'Я доделал форум)', desc: 'Почти в дед лайн =)', timestamp: '01 июля 2023' },
  ];
  return (
    <>
      {topicsData.map((element) => (
        <TopicsItem topics={element} />
      ))}
    </>
  );
};

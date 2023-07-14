import React from 'react'
import styles from './FullScreen.module.scss';
function eventHandler(event: HTMLButtonElement | MouseEvent) {
  if (document.fullscreenElement) {

    document
      .exitFullscreen()
      .then(() => console.log('yaya'))
      .catch((err) => console.error(err));
  } else {
    document.documentElement.requestFullscreen();
  }
}


export const FullScreen: React.FC = () => {
  return (
    <button type='submit' id='toggler' onClick={(e) => { eventHandler(e)}} className={ styles.iconNotification }></button>
  )
};
const toggler = document.getElementById('toggler');




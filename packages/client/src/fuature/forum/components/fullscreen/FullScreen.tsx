import React from 'react'
import styles from './FullScreen.module.scss';

export const FullScreen: React.FC = () => {
  async function eventHandler(event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) {
    if (document.fullscreenElement) {
      await document
        .exitFullscreen()
        .then(() => {
          (event.target as HTMLDivElement).classList.remove( styles.fullScreenActive)
        })
        .catch((err) => { throw new Error(err) });
    } else {
      await document.documentElement.requestFullscreen().then(r => {
        (event.target as HTMLDivElement).classList.add(styles.fullScreenActive)
      })
        .catch((err) => { throw new Error(err) })
    }
  }
  return (
    <button type='submit' id='toggler' onClick={(e) => { eventHandler(e)}} className={ styles.iconFullScreen }></button>
  )
};


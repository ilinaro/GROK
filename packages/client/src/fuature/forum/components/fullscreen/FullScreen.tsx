import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './FullScreen.module.scss';

export const FullScreen: React.FC = () => {
  const [isFullscreeen, setFullscreen] = useState(false);

  async function eventHandler(event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) {
    if (document.fullscreenElement) {
      try {
        await document.exitFullscreen();
        setFullscreen(false);
      } catch (err) {
        throw new Error();
      }
    } else {
      try {
        await document.documentElement.requestFullscreen();
        setFullscreen(true);
      } catch (err) {
        throw new Error();
      }
    }
  }
  return (
    <button
      className={clsx(styles.iconFullScreen, {
        [styles.fullScreenActive]: isFullscreeen,
      })}
      type="submit"
      id="toggler"
      onClick={(e) => eventHandler(e)}
    ></button>
  );
};

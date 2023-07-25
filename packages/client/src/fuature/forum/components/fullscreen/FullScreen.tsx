import React, { useState } from 'react'
import styles from './FullScreen.module.scss'
import classNames from 'classnames'

export const FullScreen: React.FC = () => {
  const [isFullScreen, setFullscreen] = useState(false)

  async function eventHandler(event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) {
    if (document.fullscreenElement) {
      try {
        await document.exitFullscreen()
        setFullscreen(false)
      } catch (err) {
        throw new Error()
      }
    } else {
      try {
        await document.documentElement.requestFullscreen()
        setFullscreen(true)
      } catch (err) {
        throw new Error()
      }
    }
  }
  return (
    <button className={classNames(styles.iconFullScreen, {
      [styles.fullScreenActive]: isFullScreen
    })} type='submit' id='toggler' onClick={(e) => eventHandler(e)}></button>
  )
}

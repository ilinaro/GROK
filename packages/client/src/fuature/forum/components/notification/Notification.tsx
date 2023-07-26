import React, { useState } from 'react'
import styles from './Notification.module.scss';
import { Alert } from './components/Alert'
import { AlertTitle } from './components/AlertTitle'
import { Box } from './components/Box'
import { AlertIcon } from './components/AlertIcon/AlertIcon'
import { AlertDesc } from './components/AlertDesc/AlertDesc'
import { AlertButton } from './components/AlertButton/AlertButton'

type NotificationProviderT = {
  props?: React.ComponentProps<any>;
}

export const NotificationAPI: React.FC<NotificationProviderT> = () => {
  async function notify (notificationText = "test Notification") {
    if(!("Notification" in window)) {
    alert("Browser does not support notify!")
  } else if (Notification.permission === "granted") {
    const notification = new Notification(notificationText);
  } else if(Notification.permission !== "denied") {
    await Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        const notification = new Notification(notificationText);
        }
      });
    }
  }
  const [ userResponded, setUserResponded ] = useState(false);
  async function enableNotifyAndClose() {
    await notify().then(() => {
      setUserResponded(true);
    });
  }

  function disableNotifyAndClose() {
    setUserResponded(true);
  }

  return (!(userResponded) && !(Notification.permission === "granted")) ? (
   <Alert type="success">
     <AlertIcon type="success" />
     <Box>
       <AlertTitle>Notification</AlertTitle>
       <AlertDesc>Would do you like notification?</AlertDesc>
     </Box>
     <div className={ styles.notification__button }>
     <AlertButton type="success" onClick={ enableNotifyAndClose }>Sure!</AlertButton>
     <AlertButton type="unsuccess" onClick={ disableNotifyAndClose }>No Thanks!</AlertButton>
     </div>
   </Alert>
    ) : (Notification.permission === "granted") ? (
    <div className={ styles.notification__wrapper }>

    </div>
  ) :
    <>
      <Alert type="unsuccess">
        <AlertIcon type="unsuccess"/>
        <Box>
          <AlertTitle>Notification is disabled</AlertTitle>

        </Box>
        <div className={ styles.notification__button }>
          <AlertButton type="success" onClick={ enableNotifyAndClose }>Sure!</AlertButton>
          <AlertButton type="unsuccess" onClick={ disableNotifyAndClose }>No Thanks!</AlertButton>
        </div>
      </Alert>
    </>
  ;
}


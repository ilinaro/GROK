import React, { useState } from 'react'
import styles from './Notification.module.scss';
import { Alert } from './components/Alert';
import { AlertTitle } from './components/Alert/AlertTitle';
import { Box } from './components/Alert/Box';
import { AlertIcon } from './components/Alert/AlertIcon/AlertIcon';
import { AlertDesc } from './components/Alert/AlertDesc/AlertDesc';
import { AlertButton } from './components/Alert/AlertButton';

type NotificationProviderT = {
  props?: React.ComponentProps<any>;
  notificationText: string;
}

export const NotificationAPI: React.FC<NotificationProviderT> = (props) => {

  async function notify ({ notificationText } = props) {

      if(!("Notification" in window)) {
          alert("Браузер не поддерживает уведомления!")
    } else if (Notification.permission === "granted") {
          new Notification(notificationText);
    } else if(Notification.permission !== "denied") {
          await Notification.requestPermission().then((permission) => {
              if (permission === "granted") {
                  new Notification(notificationText);
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
   <Alert type="success" isActive={ true }>
     <AlertIcon type="success" />
     <Box>
       <AlertTitle>Уведомления</AlertTitle>
       <AlertDesc>Включить уведомления?</AlertDesc>
     </Box>
     <div className={ styles.notification__button }>
     <AlertButton type="success" onClick={ enableNotifyAndClose }>Да</AlertButton>
     <AlertButton type="error" onClick={ disableNotifyAndClose }>Не включать!</AlertButton>
     </div>
   </Alert>
    ) : (Notification.permission === "granted") ? (
      <Alert type="success" isActive={ true }>
        <AlertIcon type="success" />
        <Box>
          <AlertDesc>Уведомления подключены!</AlertDesc>
        </Box>
        <div className={ styles.notification__button }>
          <AlertButton type="success" onClick={ () => notify() }>Проверить</AlertButton>
        </div>
      </Alert>

  ) :
    <>
      <Alert type="error" isActive={ true }>
        <AlertIcon type="error"/>
        <Box>
          <AlertTitle>Уведомления выключены!</AlertTitle>
        </Box>
        <div className={ styles.notification__button }>
          <AlertButton type="success" onClick={ enableNotifyAndClose }>Включить!</AlertButton>

        </div>
      </Alert>
    </>
  ;
}


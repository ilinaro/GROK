import React, { useState } from 'react';
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
  const { notificationText } = props;

  async function notify (notificationText:string) {
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
    await notify("").then(() => {
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
       <AlertTitle>Уведомления</AlertTitle>
       <AlertDesc>Включить уведомления?</AlertDesc>
     </Box>
     <div className={ styles.notification__button }>
     <AlertButton type="success" onClick={ enableNotifyAndClose }>Конечно</AlertButton>
     <AlertButton type="error" onClick={ disableNotifyAndClose }>Нет</AlertButton>
     </div>
   </Alert>
    ) : (Notification.permission === "granted") ? (
      <Alert type="success">
        <AlertIcon type="success" />
        <Box>
          <AlertDesc>Уведомления подключены!</AlertDesc>
        </Box>
        <div className={ styles.notification__button }>
          <AlertButton type="success" onClick={ () => notify("Тестовое уведомление") }>Проверить</AlertButton>
        </div>
      </Alert>

  ) :
    <>
      <Alert type="error">
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


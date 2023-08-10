import React, { useState } from 'react'
import styles from './Notification.module.scss';
import { Alert } from './components/Alert';
import { AlertTitle } from './components/Alert/AlertTitle';
import { Box } from './components/Alert/Box';
import { AlertIcon } from './components/Alert/AlertIcon/AlertIcon';
import { AlertDesc } from './components/Alert/AlertDesc/AlertDesc';
import { AlertButton } from './components/Alert/AlertButton';
import { useNotification } from '../../hooks/useNotification';

export const NotificationAPI: React.FC = () => {

  const [ userResponded, setUserResponded ] = useState(false);
  async function enableNotifyAndClose() {
    await useNotification("").then(() => {
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
          <AlertButton type="success" onClick={ () => useNotification("") }>Проверить</AlertButton>
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


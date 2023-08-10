export async function useNotification (Text:string) {

  if(!("Notification" in window)) {
    alert("Браузер не поддерживает уведомления!")
  } else if (Notification.permission === "granted") {
    new Notification(Text);
  } else if(Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification(Text);
      }
    });
  }
}
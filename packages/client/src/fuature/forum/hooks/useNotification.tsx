export function useNotification() {
  function notify(text:string) {
    if (!("Notification" in window)) {
      alert("Браузер не поддерживает уведомления!")
    } else if (Notification.permission === "granted") {
      new Notification(text);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(text);
        }
      });
    }
  }
  return { notify };
}

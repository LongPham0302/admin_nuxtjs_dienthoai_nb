// notification.js
export function showNotification(title, options) {
    if (Notification.permission === "granted") {
      const notification = new Notification(title, options);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          const notification = new Notification(title, options);
        }
      });
    }
  }
  
const showNotification = ({top = 0, right = 0, className, html}) => {
  const notification = document.createElement('div');
  notification.classList.add(className);
  notification.classList.add('notification');
  notification.textContent = html;
  notification.style.top = `${top}px`;
  notification.style.right = `${right}px`;

  document.body.appendChild(notification);

  setTimeout(() => {
    document.body.removeChild(notification);
  }, 1000);
};

let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: 'Hello ' + i++,
    className: "welcome"
  });
}, 2000);
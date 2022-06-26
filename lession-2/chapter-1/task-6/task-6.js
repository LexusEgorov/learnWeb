const field = document.querySelector('#field');
const ball = document.querySelector('#ball');

ball.style.left = `${(field.clientWidth / 2) - (ball.clientWidth / 2)}px`;
ball.style.top = `${(field.clientHeight / 2) - (ball.clientHeight / 2)}px`;

const a = Number(prompt('Введите первое число', ''));
const b = Number(prompt('Введите второе число', ''));

alert (a + b);

const readNumber = () => {
  number = prompt('Введите число', '');
  
  while (!isFinite(number)){
    number = prompt('Введите число', '');
  }

  if(number === '' || !number){
    return null;
  } 

  return Number(number);
}

const getRand = (min, max) => Math.random() * (max - min) + min;

const getRandInt = (min, max) => Math.floor( Math.random() * (max - min + 1) + min );

// В 1 задании alert выведется
const firstAnswer = prompt('Какое официальное название JavaScript', '');

if(firstAnswer === 'ECMAScript'){
  alert('Верно!');
} else {
  alert('Не знаете? ECMAScript!');
} 

const secondAnswer = prompt('Введите число', '');

if(secondAnswer < 0){
  alert(-1);
} else if(secondAnswer > 0) {
  alert(1);
} else {
  alert(0);
}

const a = 1;
const b = 2;
const result = a + b < 4 ? 'Мало' : 'Много';

const login = '';
const message = login == 'Сотрудник' ? 'Привет' :
  login == 'Директор' ? 'Здравствуйте' :
  login == '' ? 'Нет логина' : '';
let result;
const age = 5;

//6
if(age >= 14 && age <= 90){
  result = true;
} else {
  result = false;
}

//7
if(!(age >= 14 && age <= 90)){
  result = true;
} else {
  result = false;
}

if(age < 14 || age > 90){
  result = true;
} else {
  result = false;
}

//9
const login = prompt('Введите логин', '');
let password;

if(login === 'Админ'){
  password = prompt('Введите пароль', '');
  if(password === 'Я главный'){
    alert ('Здравствуйте!');
  } else if(password === ''){
    alert('Неверный пароль')
  } else if(!password){
    alert('Отменено');
  }
} else if(login === '' || !login) {
  alert('Отменено');
} else{
  alert('Я вас не знаю');
}

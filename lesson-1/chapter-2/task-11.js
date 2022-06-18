// Вопрос 1. Необязателен. Выход из функции, если зашли внутрь if

//2
const checkAge = {
  OR: (age) => age > 18 || confirm('Родители разрешили?'),
  TERNARY: (age) => age <= 18 ? confirm('Родители разрешили?') : true, 
};

//3
const min = (a, b) => Math.min(a, b);

//4
const base = prompt('Введите число', '');
const exponent = prompt('Введите степень', '');

const pow = (x, n) => {
  if(n <= 0 || Number.isInteger(n)){
    alert('Число не является натуральным');
    return;
  }
  return Math.pow(x, n);
}

alert(pow(base, exponent));

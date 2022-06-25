const camelize = (str) => str.split('-').map((word, i) => i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');

const arr = [5, 3, 8, 1, 2];

const filterRange = (arr, a, b) => arr.filter((element) => element >= a && element <= b);

const filterRangeInPlace = (arr, a, b) => {
  const newArr = arr.filter((element) => element < a || element > b);
  for(const element of newArr){
    const index = arr.findIndex((value) => value === element);
    if(index !== -1){
      arr.splice(index, 1);
    }
  }
};

arr.sort((a, b) => b - a);

const copySort = (arr) => [...arr].sort();

function Calculator(){
  
  this.operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.sum = (str) => {
    const numbers = str.split('+').map((element) => Number(element));
    return numbers[0] !== numbers[0] ? 'error' : numbers[0] + numbers[1];
  };

  this.subtact = (str) => {
    const numbers = str.split('-').map((element) => Number(element));
    return numbers[0] !== numbers[0] ? 'error' : numbers[0] - numbers[1];
  };

  this.calculate = (str) => {
    const [a, operation, b] = str.split(' ');
    return this.operations[operation](Number(a), Number(b));
  };

  this.addMethod = (symb, func) => {
    this.operations[symb] = func;
  };
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

const names = users.map((user) => user.name);

vasya = { name: "Вася", surname: "Пупкин", id: 1 };
petya = { name: "Петя", surname: "Иванов", id: 2 };
masha = { name: "Маша", surname: "Петрова", id: 3 };

users = [ vasya, petya, masha ];

const usersMapped = users.map((user) => (
  {
    id: user.id,
    fullName: `${user.name} ${user.surname}`, 
  }
));

const sortByAge = (users) => users.sort((a, b) => a.age - b.age);

const getRandInt = (min, max) => Math.floor( Math.random() * (max - min + 1) + min );
const shuffle = (arr) => {
  let noUsedElements = [...arr];
  arr.splice(0, arr.length);
  while(noUsedElements.length > 0){
    const randIndex = getRandInt(0, noUsedElements.length - 1)
    arr.push(noUsedElements[randIndex]);
    noUsedElements = [...noUsedElements.slice(0, randIndex), ...noUsedElements.slice(randIndex + 1)];
  }
};

let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}
// Проверку взял из решения. Распределение нормальное

const getAvgAge = (users) => {
  let summaryAge = 0;
  for(const user of users){
    summaryAge += user.age;
  }
  return summaryAge / users.length;
};

const strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

const unique = (arr) => {
  const stringsSet = new Set(arr);
  return [...stringsSet];
};
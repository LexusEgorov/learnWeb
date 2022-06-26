const clear = (element) => {
  element.innerHTML = '';
};

const element = document.querySelector('#elem');

clear(element);

const addElement = () => {
  let list = document.querySelector('.list');
  if(!list){
    const newList = document.createElement('ul');
    newList.classList.add('list');
    document.body.appendChild(newList);
    list = document.querySelector('.list');
  }

  let isActive = true;

  do{
    const elementContent = prompt('Введите содержимое пункта', '');
    if(elementContent === null || elementContent === ''){
      isActive = false;
    } else{
      const newElement = document.createElement('li');
      newElement.textContent = elementContent;
      list.appendChild(newElement);
    }
  } while (isActive)
};

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

const mainContainer = document.querySelector('.tree-from-object');

const createTree = (data) => {
  
  const keys = Object.keys(data);

  if(keys.length === 0){
    return;
  }

  const container = document.createElement('ul');

  for(const key of keys){
    const element = document.createElement('li');
    
    element.innerText = key;
    
    const elementData = createTree(data[key]);
    if(elementData){
      element.appendChild(elementData);
    }

    container.appendChild(element);
  }

  return container;
};

const renderTree = (container, data) => {
  container.appendChild(createTree(data));
}

renderTree(mainContainer, data);

const tree = document.querySelector('.tree');

const changeTree = (tree) => {
  const items = tree.querySelectorAll('li');
  for(const item of items){
    const children = item.querySelectorAll('li');
    if(children.length === 0){
      continue;
    }
    item.firstChild.textContent = `${item.firstChild.textContent.trim()} [${children.length}]`
  }
};

changeTree(tree);


const getHeader = () => {
  const DAYS = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс',]
  const headerRow = document.createElement('tr');
  for(let i = 0; i < 7; i++){
    const header = document.createElement('th');
    header.textContent = DAYS[i];
    headerRow.appendChild(header);
  }

  return headerRow;
}

const getFixedDay = (date) => date.getDay() === 0 ? 6 : date.getDay() - 1;

const getFirstWeek = (date) => {
  const firstRow = document.createElement('tr');
  
  for(let i = 0; i < 7; i++){
    const day = document.createElement('td');
    if(i >= getFixedDay(date)){
      day.textContent = date.getDate();
      date.setDate(date.getDate() + 1);
    }
    firstRow.appendChild(day);
  }

  return firstRow;
};

const getWeek = (date) => {
  const row = document.createElement('tr');
  const month = date.getMonth();
  
  for(i = 0; i < 7; i++){
    const day = document.createElement('td');
    if(month === date.getMonth()){
      day.textContent = date.getDate();
      date.setDate(date.getDate() + 1);
    }
    row.appendChild(day);
  }

  return row;
};

const createCalendar = (element, year, month) => {
  const container = document.querySelector(`.${element}`);
  const calendar = document.createElement('table');
  const date = new Date(year, month - 1);
  const currentMonth = date.getMonth();

  calendar.appendChild(getHeader());
  calendar.appendChild(getFirstWeek(date));
  
  while(currentMonth === date.getMonth()){
    calendar.appendChild(getWeek(date));
  }
  
  container.appendChild(calendar);
};

createCalendar('calendar', 2020, 2);

class Clock{
  #timer = null;
  #date = null;
  #hours = null;
  #minutes = null;
  #seconds = null;

  constructor(selector){
    const clock = document.querySelector(`.${selector}`);
    this.#hours = clock.querySelector('.hours');
    this.#minutes= clock.querySelector('.minutes');
    this.#seconds = clock.querySelector('.seconds');
  }

  start(){
    this.#timer = setInterval(this.#update, 1000);
    this.#update();
  }

  stop(){
    clearInterval(this.#timer);
  }

  #update = () => {
    this.#date = new Date();
    this.#hours.textContent = this.#date.getHours();
    if(this.#hours.textContent < 10){
      this.#hours.textContent = `0${this.#date.getHours()}`
    }
    this.#minutes.textContent = this.#date.getMinutes();
    if(this.#minutes.textContent < 10){
      this.#minutes.textContent = `0${this.#date.getMinutes()}`
    }
    this.#seconds.textContent = this.#date.getSeconds();
    if(this.#seconds.textContent < 10){
      this.#seconds.textContent = `0${this.#date.getSeconds()}`
    }
  };
}

const clock = new Clock('clock');

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

startBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  startBtn.disabled = true;
  clock.start();
});

stopBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  startBtn.disabled = false;
  clock.stop();
});

const two = document.querySelector('#two');
two.insertAdjacentHTML('beforebegin', '<li>2</li><li>3</li>');

const table = document.querySelector('#table');
const users = Array.from(table.querySelectorAll('tr'));
users.shift();
const sortedUsers = users.sort((a, b) => a.cells[0].textContent > b.cells[0].textContent);
table.tBodies[0].append(...sortedUsers);
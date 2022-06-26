const div = document.body.children[0];
const ul = document.body.children[1];
const liPit = ul.lastElementChild;

const tdArr = document.querySelectorAll('td');
for(let i = 0; i < tdArr.length; i += 6){
  tdArr[i].style.backgroundColor = 'red';
}
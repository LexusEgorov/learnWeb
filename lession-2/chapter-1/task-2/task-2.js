const items = document.querySelectorAll('li');

for(const item of items){
  const text = item.firstChild.textContent;
  const count = item.querySelectorAll('li').length;
  console.log(`${text}: ${count}`);
}
const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

const isEmpty = (obj) => {
  for(const key in obj){
    return false
  }
  return true;
}; 


const salaries = {
  John: 100,
  Ann: 150,
  Pete: 130,
};

let sum = 0;
for (const key in salaries){
  sum += salaries[key];
}

const menu = {
  width: 200,
  height: 300,
  title: "My menu",
}

const multiplyNumeric = (obj) => {
  for (const key in obj){
    if(typeof( obj[key] ) === 'number'){
      obj[key] *= 2;
    }
  }
};

multiplyNumeric(menu);

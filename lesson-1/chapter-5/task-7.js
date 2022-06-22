const sumSalaries = (salariesObj) => {
  let sum = 0;
  for(const salary of Object.values(salariesObj)){
    sum += salary;
  }

  return sum;
};

const count = (obj) => Object.keys(obj).length;
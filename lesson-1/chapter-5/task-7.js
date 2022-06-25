let user = {
  name: "John",
  years: 30
};

const {name, years: age, isAdmin = false} = user;

const topSalary = (salaries) => {
  let maxSalary = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)){
    if(salary > maxSalary){
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
};

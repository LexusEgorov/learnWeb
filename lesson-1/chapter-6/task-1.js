const sumTo = {
  CYCLE: (n) => {
    let sum = 0;
    for(let i = 1; i <= n; i++){
      sum += i;
    }
    return sum;
  },

  RECURSION: (n) => {
    if (n === 1){
      return 1;
    }
    return n + sumTo.RECURSION(n - 1);
  },

  PROGRESSION: (n) => n * (1 + n) / 2,
}

const factorial = (n) => {
  if(n < 1){
    return 'error'
  }
  if (n === 1){
    return 1;
  }
  return n * factorial(n - 1);
};

const fib = (n) => {
  let firstNumber = 1;
  let secondNumber = 1;

  for(let i = 3; i <= n; i++){
    const tmp = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = tmp;
  }

  return secondNumber;
};

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

const printList = {
  CYCLE: (list) => {
    while(list){
      console.log(list);
      list = list.next;
    }
  },

  RECURSION: (list) => {
    if(list){
      console.log(list);
      printList.RECURSION(list.next);
    }
  },
};

const printReverseList = {
  CYCLE: (list) => {
    const listElements = [];
    while(list){
      listElements.unshift(list);
      list = list.next;
    }
    for(const element of listElements){
      console.log(element)
    }
  },
  
  RECURSION: (list) => {
    if(list.next){
      printReverseList.RECURSION(list.next);
    }

    console.log(list)
  },
};

printReverseList.CYCLE(list);

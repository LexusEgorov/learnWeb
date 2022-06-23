const printNumbers = {
  TIMEOUT: (from, to) => {
    let currentNumber = from;
    let timeout = setTimeout(() => {
      console.log(currentNumber);
      if(currentNumber === to){
        return;
      }
      printNumbers.TIMEOUT(from + 1, to);
    }, 1000);
  },

  INTERVAL: (from, to) => {
    let currentNumber = from;
    let interval = setInterval(() => {
      console.log(currentNumber);
      if(currentNumber === to){
        clearInterval(interval);
      }
      currentNumber++;
    }, 1000); 
  },
};

printNumbers.TIMEOUT(1,5);
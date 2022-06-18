//4
for(let i = 2; i <= 10; i+=2){
  console.log(i);
}

//5
let i = 0;
while(i < 3){
  alert( `number ${i}!` );
  i++;
}

//7
const isPrime = (number) => {
  for (let i = 2; i < number; i++){
    if(number % i === 0){
      return false;
    }
  }
  return true;
};

const getPrimeNumbers = (n) =>{
  for(let i = 2; i <= n; i++){
    if(isPrime(i)){
      console.log(i);
    }
  }
}

getPrimeNumbers(50);

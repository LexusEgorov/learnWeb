const styles = [
  'Джаз',
  'Блюз',
];

styles.push('Рок-н-ролл');
styles[Math.floor((styles.length - 1) / 2)] = 'Классика'
console.log(styles.shift());
styles.unshift('Рэп', 'Регги');

const sumInput = () => {
  const arr = [];
  do{
    arr.push( Number(prompt('Введите число', '')) );
  } while(arr[arr.length - 1] !== '' || arr[arr.length - 1] !== null || isFinite(arr[arr.length - 1]));

  arr.pop();

  let sum = 0;
  for(const element of arr){
    sum += element;
  }

  return sum;
}

const getMaxSum = (arr) => {
  let maxSum = 0;
  let currentSum = 0;

  for(const element of arr){
    if (element > 0){
      currentSum += element;
    } else {
      maxSum = Math.max(maxSum, currentSum);
      currentSum = 0;
    }
  }
  maxSum = Math.max(maxSum, currentSum);

  return maxSum;
}

console.log(getMaxSum([1, 2, 3]));

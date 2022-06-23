const makeCounter = () => {
  let count = 0;

  const counter = () => count++;
  counter.set = (value) => count = value;
  counter.decrease = () => count--;

  return counter;
};
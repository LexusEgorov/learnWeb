const ucFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const checkSpam = (str) => {
  const strLowerCase = str.toLowerCase();

  return strLowerCase.includes('viagra') || strLowerCase.includes('xxx');
};

const truncate = (str, maxLength) => str.slice(0, maxLength - 3) + '...';

const extractCurrencyValue = (str) => Number(str.slice(1)); 
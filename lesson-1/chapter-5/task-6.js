const unique = (arr) => {
  const valuesSet = new Set(arr);
  return [...valuesSet];
};

const aclean = (arr) => {
  const mapByArr = new Map();
  for(const element of arr){
    mapByArr.set(element.toLowerCase().split('').sort().join(), element);
  }
  return [...mapByArr.values()];
};


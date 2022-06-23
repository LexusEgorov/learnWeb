const sum = (a) => (b) => a + b;

const inBetween = (a, b) => (n) => a <= n && n <= b;
const inArray = (arr) => (n) => arr.findIndex((element) => element === n) !== -1;

const byField = (fieldName) => (a, b) => a[fieldName] > b[fieldName];
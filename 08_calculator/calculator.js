const add = function(valueA, valueB) {
  return valueA + valueB;
};

const subtract = function(valueA, valueB) {
	return valueA - valueB;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current);
};

const power = function(valueA, valueB) {
	return Math.pow(valueA, valueB);
};

const factorial = function(n) {
  if (n === 0) return 1;
  let product = 1;
  
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

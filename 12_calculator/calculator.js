const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current);
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(n) {
  let ans = 1;
  for (let i = n; i >= 1; i--) {
    ans *= i;
  }
  return ans;
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

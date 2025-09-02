const fibonacci = function(countArg) {
  // check and/or set type
  let count
  if (typeof countArg !== 'number') {
    count = parseInt(countArg)
    } else {
      count = countArg
  }
  // error or special case handling
  if (count < 0) return "OOPS";
  if (count == 0) return 0;

  // 2 number array; just passes count 
  const fib = [0, 1];
  for (let i = 2; i <= count; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
 }

  // count = 1 is final special case
 return fib[count];
};

// Do not edit below this line
module.exports = fibonacci;

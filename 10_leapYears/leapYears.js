const leapYears = function(year) {
  const divFour = year % 4 === 0;
  const is100   = year % 100 === 0;
  const is400   = year % 400 === 0;

  if (divFour && (!is100 || is400)) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;

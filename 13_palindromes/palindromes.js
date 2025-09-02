const palindromes = function (string) {
  // string of valid characters
  const valid = 'abcdefghijklmnopqrstuvwxyz0123456789';

  // clean input string and filter through 'valid'
  const cleaned = string
    // clean
    .toLowerCase()
    // convert to array of chars
    .split('')
    // filter; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    .filter((character) => valid.includes(character))
    // rejoin array after running method array.prototype.filter()
    .join('');

  // reverse; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
  const reversed = cleaned.split('').reverse().join('');

  // Return the outcome of the comparison which will either be true or false
  return cleaned === reversed;
};

module.exports = palindromes;
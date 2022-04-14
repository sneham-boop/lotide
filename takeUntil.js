// Import functions
const assertArraysEqual = require("./assertArraysEqual");

// Function implementation for takeUntil
// takeUntil(array, callback): Returns the array until 
// the element for which the callback returns a true value.
const takeUntil = (array, callback) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result = array.slice(0, i);
      break;
    }
  }
  return result;
};

module.exports = takeUntil;

// Checks
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

// Assertion checks
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

// Import functions
const assertArraysEqual = require("./assert_functions/assertArraysEqual");

// Function implementation map
// map(array, callback): Returns a new array with the callback
// function applied to all elements within the input array.
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// Checks
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
console.log(results1);
// Test by assertion
assertArraysEqual(
  map(words, (word) => word[0]),
  ["g", "c", "t", "m", "t"]
);

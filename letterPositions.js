// Import functions
const assertArraysEqual = require("./assertArraysEqual");

// Get positions for each character
const letterPositions = (sentence) => {
  const results = {};
  sentence = sentence.match(/\w/gi);

  // Iterate over all characters of the string
  // and pass index so that that value can be pushed
  // to the key value pair, with the value being an array
  // of indices
  sentence.forEach((element, index) => {
    // Check if key value pair exists, if not create it
    // and initialize with the first value being an index
    // when that character is first found
    if (results[element]) {
      results[element].push(index);
    } else {
      results[element] = [index];
    }
  });
  return results;
};

module.exports = letterPositions;

// Tests
//console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);

const assertArraysEqual = require("../assert_functions/assertArraysEqual");

// Function implementation letterPositions
// letterPositions(sentence): Returns an array of 0 based
// indices of positions of each character in the sentence
// string where each character is found.
const letterPositions = (sentence) => {
  const results = {};
  sentence = sentence.match(/\w/gi);

  sentence.forEach((element, index) => {
    // Check if key value pair exists
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

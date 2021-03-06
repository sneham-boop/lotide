const assertEqual = require("../assert_functions/assertEqual");

// Function implementation countLetters
// countLetters(sentence): Returns a count of each letter in the the sentence (string) passsed.
// Upper case letters are treated as different from lower case in this case.
const countLetters = (sentence) => {
  let count = {};

  // Drop spaces and any special characters
  sentence = sentence.match(/\w/gi);

  for (let char of sentence) {
    // Does this key/value pair already exist for the character?
    // If yes, add 1 to it.
    // If not, initiate it for a value of 1.
    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }

  // Return object with counted key/value pairs for each character
  return count;
};

module.exports = countLetters;

// Tests
console.log(countLetters("The world needs more love."));

// Assertion checks
const result1 = countLetters("The world needs more love.");
assertEqual(result1["T"], 1);
assertEqual(result1["h"], 1);
assertEqual(result1["e"], 5);
assertEqual(result1["w"], 1);
assertEqual(result1["o"], 3);
assertEqual(result1["r"], 2);
assertEqual(result1["l"], 2);
assertEqual(result1["d"], 2);
assertEqual(result1["n"], 1);
assertEqual(result1["s"], 1);
assertEqual(result1["m"], 1);
assertEqual(result1["v"], 1);

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Counts letters in the input string. Upper case letters 
// are treated as different from lower case in this case.
const countLetters = function (stringToProcess) {
  let resultingCount = {};

  // Drop spaces and any special characters
  stringToProcess = stringToProcess.match(/\w/gi);

  // Iterate over all characters of the string
  for (character of stringToProcess) {
    // Does this key/valye pair already exist for the character?
    // If yes, add 1 to it.
    // If not, initiate it for a value of 1.
    if (resultingCount[character]) {
      resultingCount[character] += 1;
    } else {
      resultingCount[character] = 1;
    }
  }

  // Return object with counted key/value pairs for each character
  return resultingCount;
};

// console.log(countLetters("The world needs more love."));

// Checks
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


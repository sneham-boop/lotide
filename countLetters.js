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

console.log(countLetters("Who doesn't love coffee? Everyone does."));

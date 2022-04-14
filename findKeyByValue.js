// Function implementation for assertEqual()
// Checks if primitive values passed are equal
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function implementation for findKeyByValue()
// Returns the first key for which the value matches
const findKeyByValue = (object, value) => {
  // Iterate over obj
  for (let key in object) {
    // Return the first key where "value" matches
    // the key/value pair in obj
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

// Checks
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// Function implementation for assertEqual()
// Checks if primitive values passed are equal
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function implementation for findKeyByValue()
// Returns the first key for which the value matches
const findKeyByValue = (obj, value) => {
  // Iterate over obj
  for (let key in obj) {
    // Return the first key where "value" matches
    // the key/value pair in obj
    if (obj[key] === value) {
      return key;
    }
  }
};

// Checks
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

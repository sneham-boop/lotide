// Function implementation assertEqual
// assertEqual(val1, val2):
// Asserts if the primitive values passed, val1 and val2, are equal or not.
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function implementation for findKeyByValue
// findKeyByValue(object, value): Returns the first key in object
// where the value matches the passed value.
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

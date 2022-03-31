// Check if primitive values passed are equal
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (obj, value) => {
  // Iterate over obj
  for (key in obj) {
    // Return the first key where "value" matches
    // the values in obj
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

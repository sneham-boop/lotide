// Check if primitive values passed are equal
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, callback) => {
  // Iterate over obj
  for (let key in obj) {
    // Return the first key where result of callback
    // function matches the key/value pairs in
    // the obj object
    if (callback(obj[key])) {
      return key;
    }
  }
};

// Checks
const result1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"

console.log(result1);

// Assertion checks
assertEqual(result1, "noma");

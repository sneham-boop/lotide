// Import functions
const assertEqual = require("./assert_functions/assertEqual");

// Function implementation for findKey
// findKey(object, callback): Returns the key for 
// the first value in object where the callBack function returns true.
const findKey = (object, callback) => {
  // Iterate over obj
  for (let key in object) {
    // Return the first key where result of callback
    // function matches the key/value pairs in
    // the obj object
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;

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

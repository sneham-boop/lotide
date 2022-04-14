// Import functions
const assertEqual = require("./assertEqual");

// Function implementation for countOnly
// countOnly(array, object):
// Returns an object containing counts of everything that the
// input object listed as true, counted in the array passed.

const countOnly = (array, object) => {
  let count = {};

  // Iterate over all elements of allItems
  for (let ele of array) {
    // Check if we need to count this element?
    if (object[ele] === true) {
      // Does this key/value pair already exist?
      // If yes, add 1 to it.
      // If not, initiate it for a value of 1.
      if (count[ele]) {
        count[ele] += 1;
      } else {
        count[ele] = 1;
      }
    }
  }

  // Return object with counted key/value pairs
  return count;
};

module.exports = countOnly;

// Checks / tests
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

console.log(result1);

// Assertion checks
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

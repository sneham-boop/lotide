// Function implementation for assertEqual()
// Checks if primitive values passed are equal
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function implementation for countOnly()
// This function takes in a collection of items and
// returns counts for a specific subset of those items.
// It won't count everything. In order to decide what to count,
// it will also be given an idea of which items we care about
// and it will only count those, ignoring the others.
// Items in our case will be limited to Strings.

const countOnly = (array, object) => {
  let count = {};

  // Iterate over all elements of allItems
  for (let element of array) {
    // Check if we need to count this element?
    if (object[element] === true) {
      // Does this key/valye pair already exist?
      // If yes, add 1 to it.
      // If not, initiate it for a value of 1.
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
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

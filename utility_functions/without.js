// Import functions
const assertArraysEqual = require("../assert_functions/assertArraysEqual");

// Function implementation for without
// without(array1, array2 ): Returns an array of elements in 
// array1 without the elements in array2.
const without = (array1, array2) => {
  // Spread operator is used to copy orginal array
  // without modifying it
  let result = [...array1];

  for (let i = 0; i < array2.length; i++) {
    // Check is element to remove is present in original items
    if (result.includes(array2[i])) {
      // Get index of element to remove
      let index = result.indexOf(array2[i]);

      // Get elements up to index (not including as per slice)
      // concat value of remaining array
      // Result is saved
      result = result
        .slice(0, index)
        .concat(result.slice(index + 1, result.length));
    }
  }

  // Return the resulting array
  return result;
};

module.exports = without;

//console.log(without([0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5]));

// test cases for without function
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// Import functions
const eqArrays = require("./eqArrays");

// Function implementation assertArraysEqual
// assertArraysEqual(array1, array2)
// Asserts if the passed arrays, array1 and array2, are equal or not.
const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2) === true) {
    console.log(`😀😀😀 Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

// Export function
module.exports = assertArraysEqual;





// Function implementation assertEqual
// assertEqual(val1, val2)
// Asserts if the primitive values passed, val1 and val2, are equal or not.
const assertEqual = (val1, val2) => {
  if (val1 === val2) {
    console.log(`😀😀😀 Assertion Passed: ${val1} === ${val2}`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: ${val1} !== ${val2}`);
  }
};

// Export function
module.exports = assertEqual;

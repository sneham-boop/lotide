// Check if primitive values passed are equal
const assertEqual = function(val1, val2) {
  if (val1 === val2) {
    console.log(`😀😀😀 Assertion Passed: ${val1} === ${val2}`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: ${val1} !== ${val2}`);
  }
};

module.exports = assertEqual;


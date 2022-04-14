// Import functions
const assertArraysEqual = require("./assert_functions/assertArraysEqual");

// Function implementation flatten
// flatten(array): Returns the flat version of the array passed.
// Only one nested level implemented.
const flatten = (array) => {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flatArray.push(array[i]);
    } else {
      for (let j = 0; j < array[i].length; j++) {
        flatArray.push(array[i][j]);
      }
    }
  }
  return flatArray;

  // By use of .flat() method // Alternative method
  // return array.flat();
};

module.exports = flatten;

console.log(flatten([1, 2, 3, 4, [5, 5], 6]));
console.log(
  assertArraysEqual(flatten([1, 2, 3, 4, [5, 5], 6]), [1, 2, 3, 4, 5, 5, 6])
);

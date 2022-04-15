const assertArraysEqual = require("../assert_functions/assertArraysEqual");

// Function implementation for without
// without(array1, array2 ): Returns an array of elements in 
// array1 without the elements in array2.
const without = (array1, array2) => {
  let result = [];
  // Only filter elements that are not present
  result = array1.filter(a=>{
    return !array2.includes(a);
  });


  return result;
};

module.exports = without;

console.log(without([0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 5, 6]));
console.log(without([0, 1, 2, 3, 2, 1], [0, 1, 2, 3]));

// test cases for without function
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

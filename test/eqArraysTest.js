// Import functions
const assertEqual = require("../assert_functions/assertEqual");
const eqArrays = require("../eqArrays");

// Checks / tests
const result1 = eqArrays([1, 2, 3], [1, 2, 3]); // => true
const result2 = eqArrays([1, 2, 3], [3, 2, 1]); // => false

const result3 = eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
const result4 = eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(result1, true); // => should PASS
assertEqual(result2, false); // => should FAIL
assertEqual(result3, true); // => should PASS
assertEqual(result4, false); // => should FAIL
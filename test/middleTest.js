// Import functions
const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");


// Test code
assertArraysEqual(middle([0, 1, 2, 3, 4, 5]), [2, 3]);
assertArraysEqual(middle([0, 1, 2, 3, 4, 5, 6]), [3]);
assertArraysEqual(middle([0, 1]), []);

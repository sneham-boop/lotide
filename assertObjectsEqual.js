// Checks arrays for equality
const eqArrays = (array1, array2) => {
  // Return false when lengths not equal
  if (array1.length !== array2.length) {
    return false;
  }
  // Check each element, return false if index and value don't match
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  // Return true if all code was evaluated
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // Check if same number of keys exist for both objects
  if (Object.keys(object1).length === Object.keys(object2).length) {
    // If yes, then for each key check if the value for that key is the same
    // in both objects
    for (let key of Object.keys(object1)) {
      // Check for a value mismatch
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
  } else {
    // Number of keys do not match for both objects
    return false;
  }

  // Return true if all code was evaluated
  return true;
};

// FUNCTION IMPLEMENTATION assertObjectsEqual
const assertObjectsEqual = function(actual, expected) {
  // Allows to actually show the values within the objects.
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`😀😀😀 Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

// Tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

console.log("\nCheck if object ab is equal to ba:");
assertObjectsEqual(ab, ba);

console.log("\nCheck if object ab is equal to abc:");
assertObjectsEqual(ab, abc);

console.log("\nCheck if object cd is equal to dc:");
assertObjectsEqual(cd, dc);

console.log("\nCheck if object cd is equal to cd2:");
assertObjectsEqual(cd, cd2);

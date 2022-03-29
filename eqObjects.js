// Check if primitive values passed are equal
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};


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
const eqObjects = function (object1, object2) {
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



// Tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

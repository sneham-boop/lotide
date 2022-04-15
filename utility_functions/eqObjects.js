const eqArrays = require("./eqArrays");

// Function implementation eqObjects
// eqObjects(object1, object2)
// Returns true if object1 and object2 are equal.
const eqObjects = (object1, object2) => {
  // Check if same number of keys exist for both objects
  if (Object.keys(object1).length === Object.keys(object2).length) {
    // If yes, then for each key check if the value for that key is the same
    // in both objects
    for (let key of Object.keys(object1)) {
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

module.exports = eqObjects;

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

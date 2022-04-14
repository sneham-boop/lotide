const eqObjects = require("./eqObjects");

// Function implementation assertObjectsEqual
// assertObjectsEqual(object1, object2)
// Asserts if the objects passed, object1 and object2, are equal or not.
const assertObjectsEqual = function (actual, expected) {
  // Allows to actually show the values within the objects.
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(
      `😀😀😀 Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`
    );
  } else {
    console.log(
      `🥵🥵🥵 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`
    );
  }
};

module.exports = assertObjectsEqual;

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

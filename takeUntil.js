// eqArrays function implementation
const eqArrays = (array1, array2) => {
  let matchedResult = true;
  for (let i = 0; i < array1.length; i++) {
    // check each element
    if (array1[i] !== array2[i]) {
      matchedResult = false;
    }
  }
  return matchedResult;
};

// assertArraysEqual function
const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2) === true) {
    console.log(`😀😀😀 Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🥵🥵🥵 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

// takeUntil function implementation
const takeUntil = (array, callback) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result = array.slice(0, i);
      break;
    }
  }
  return result;
};

// Checks
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

// Assertion checks
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

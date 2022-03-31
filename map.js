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


// map function implementation
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// Checks
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
console.log(results1);
// Test by assertion
assertArraysEqual(map(words, (word) => word[0]), [ 'g', 'c', 't', 'm', 't' ]);

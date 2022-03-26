// Check if the arrays passed are equal or not
// "true" or "false" is returned as a result
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

// Print to console if the passed arrays are equal
const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2) === true) {
    return console.log(`😀😀😀 Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    return console.log(`🥵🥵🥵 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

const flatten = (arr) => {
  /* Alternative method
  let flattenedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      flattenedArray.push(arr[i]);
    } else {
      for (let j = 0; j < arr[i].length; j++) {
        flattenedArray.push(arr[i][j]);
      }
    }
  }
console.log(flattenedArray)*/

  // By use of .flat method
  return arr.flat();
};

console.log(flatten([1, 2, 3, 4, [5, 5], 6]));
console.log(
  assertArraysEqual(flatten([1, 2, 3, 4, [5, 5], 6]), [1, 2, 3, 4, 5, 5, 6])
);

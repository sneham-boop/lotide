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

const middle = (arr) => {
  let middleItems = [];

  // Return empty array if length less than or equal to 2
  if (arr.length <= 2) {
    return middleItems;
  } else {
    // Find middle-ish index
    let middleIndex = Math.floor(arr.length / 2);

    // Check if array length is even or odd
    if (arr.length % 2 === 0) {
      // accumulate middle 2 items if even
      middleItems = [arr[middleIndex - 1], arr[middleIndex]];
    } else {
      // Accumulate only 1 item in the middle if odd
      middleItems = [arr[middleIndex]];
    }
  }
  return middleItems;
};

assertArraysEqual(middle([0, 1, 2, 3, 4, 5]), [2, 3]);
assertArraysEqual(middle([0, 1, 2, 3, 4, 5, 6]), [3]);
assertArraysEqual(middle([0, 1]), []);

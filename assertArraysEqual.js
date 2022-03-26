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

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2) === true) {
    return `😀😀😀 Assertion Passed: [${array1}] === [${array2}]`;
  } else {
    return `🥵🥵🥵 Assertion Failed: [${array1}] !== [${array2}]`;
  }
};

console.log(assertArraysEqual([4, 5, 6], [4, 5, 6]));

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should PASS

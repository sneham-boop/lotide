// Reture a true or false value if arrays are equal
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

// Print to console if arrays are equal
const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2) === true) {
    return console.log(`😀😀😀 Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    return console.log(`🥵🥵🥵 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

// Get positions for each character
const letterPositions = function (sentence) {
  const results = {};
  sentence = sentence.match(/\w/gi);

  // Iterate over all characters of the string
  // and pass index so that that value can be pushed
  // to the key value pair, with the value being an array
  // of indices
  sentence.forEach((element, index) => {

    // Check if key value pair exists, if not create it
    // and initialize with the first value being an index 
    // when that character is first found
    if (results[element]) {
      results[element].push(index);
    } else {
      results[element] = [index];
    }
  });
  return results;
};

// Tests
//console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);

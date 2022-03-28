const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`😭😭😭 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("bam", "bam");
assertEqual(1, 7);

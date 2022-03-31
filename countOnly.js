const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = (allItems, itemsToCount) => {
  let resultingCount = {};

  // Iterate over all elements of allItems
  for (element of allItems) {
    // Check if we need to count this element?
    if (itemsToCount[element] === true) {
      // Does this key/valye pair already exist?
      // If yes, add 1 to it.
      // If not, initiate it for a value of 1.
      if (resultingCount[element]) {
        resultingCount[element] += 1;
      } else {
        resultingCount[element] = 1;
      }
    }
  }

  // Return object with counted key/value pairs
  return resultingCount;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

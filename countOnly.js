const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🥵🥵🥵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function (allItems, itemsToCount) {
  let count = {};

  for (key in itemsToCount) {
    if (itemsToCount[key] === true) {
      let countItem = 0;
      for (element of allItems) {
        if (key === element) {
          countItem += 1;
        }
        if (countItem > 0) {
          count[key] = countItem;
        }
      }
    }
  }

  return count;
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

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

// import all functions
const head = require("./utility_functions/head");
const tail = require("./utility_functions/tail");
const middle = require("./utility_functions/middle");
const assertArraysEqual = require("./assert_functions/assertArraysEqual");
const assertEqual = require("./assert_functions/assertEqual");
const assertObjectsEqual = require("./assert_functions/assertObjectsEqual");
const countLetters = require("./utility_functions/countLetters");
const countOnly = require("./utility_functions/countOnly");
const eqArrays = require("./utility_functions/eqArrays");
const eqObjects = require("./utility_functions/eqObjects");
const findKey = require("./utility_functions/findKey");
const findKeyByValue = require("./utility_functions/findKeyByValue");
const flatten = require("./utility_functions/flatten");
const letterPositions = require("./utility_functions/letterPositions");
const map = require("./utility_functions/map");
const takeUntil = require("./utility_functions/takeUntil");
const without = require("./utility_functions/without");

// export object
module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without,
};

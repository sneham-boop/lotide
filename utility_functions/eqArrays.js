// Function implementation eqArrays
// eqArrays(array1, array2)
// Returns true if array1 and array2 are equal.
const eqArrays = (array1, array2) => {
  // Return false when lengths not equal
  if (array1.length !== array2.length) return false;
  // Check each element, return false if index and value don't match
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  // Return true if all code was evaluated
  return true;
};

module.exports = eqArrays;

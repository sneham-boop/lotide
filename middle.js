// Function implementation for middle
// middle(array): Returns the middle (qty 1 or 2) elements depending
// on the length of the array being odd or even. Returns an empty
// array if number of elements is less than 3.
const middle = (array) => {
  let mid = [];

  // Return empty array if length less than or equal to 2
  if (array.length <= 2) {
    return mid;
  } else {
    // Find middle-ish index
    let midIndex = Math.floor(array.length / 2);

    // Check if array length is even or odd
    if (array.length % 2 === 0) {
      // accumulate middle 2 items if even
      mid = [array[midIndex - 1], array[midIndex]];
    } else {
      // Accumulate only 1 item in the middle if odd
      mid = [array[midIndex]];
    }
  }
  return mid;
};

module.exports = middle;

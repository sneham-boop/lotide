const middle = (array) => {
  let middleItems = [];

  // Return empty array if length less than or equal to 2
  if (array.length <= 2) {
    return middleItems;
  } else {
    // Find middle-ish index
    let middleIndex = Math.floor(array.length / 2);

    // Check if array length is even or odd
    if (array.length % 2 === 0) {
      // accumulate middle 2 items if even
      middleItems = [array[middleIndex - 1], array[middleIndex]];
    } else {
      // Accumulate only 1 item in the middle if odd
      middleItems = [array[middleIndex]];
    }
  }
  return middleItems;
};

module.exports = middle;


const middle = (arr) => {
  let middleItems = [];

  // Return empty array if length less than or equal to 2
  if (arr.length <= 2) {
    return middleItems;
  } else {
    // Find middle-ish index
    let middleIndex = Math.floor(arr.length / 2);

    // Check if array length is even or odd
    if (arr.length % 2 === 0) {
      // accumulate middle 2 items if even
      middleItems = [arr[middleIndex - 1], arr[middleIndex]];
    } else {
      // Accumulate only 1 item in the middle if odd
      middleItems = [arr[middleIndex]];
    }
  }
  return middleItems;
};

module.exports = middle;


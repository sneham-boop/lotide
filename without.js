// Check if the arrays passed are equal or not
// "true" or "false" is returned as a result
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

// Print to console if the passed arrays are equal
const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2) === true) {
    return console.log(`😀😀😀 Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    return console.log(`🥵🥵🥵 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

// Remove the elements from original array without 
// modifying the original array
const without = (originalItems, removeItems) => {
  // Spread oeprator is used to copy orginal array 
  // without modifying it
  let resultingArray = [...originalItems];

  for (let i = 0; i < removeItems.length; i++) {
    
    // Check is element to remove is present in original items
    if (resultingArray.includes(removeItems[i])) {

      // Get index of element to remove
      let index = resultingArray.indexOf(removeItems[i]);
      
      // Get elements up to index (not including as per slice)
      // concat value of remaining array 
      // Result is saved
      resultingArray = resultingArray
        .slice(0, index)
        .concat(resultingArray.slice(index+1, resultingArray.length));
    }
  }

  // Return the resulting array
  return resultingArray;
};

//console.log(without([0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5]));

// test cases for without function
const words = ["hello", "world", "lighthouse"]; 
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

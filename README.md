# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @snehakm/lotide`

**Require it:**

`const _ = require('@snehakm/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element of array.
* `tail(array)`: Returns the array without its first element.
* `middle(array)`: Returns the middle (qty 1 or 2) elements depending on the length of the array being odd or even. Returns an empty array if number of elements is less than 3.
* `assertArraysEqual(array1, array2)`: Asserts if the passed arrays, array1 and array2, are equal or not.
* `assertEqual(val1, val2)`: Asserts if the primitive values passed, val1 and val2, are equal or not. 
* `assertObjectsEqual(object1, object2)`: Asserts if the objects passed, object1 and object2, are equal or not.
* `countLetters(sentence)`: Returns a count of each letter in the the sentence (string) passsed.
* `countOnly(array, object)`: Returns an object containing counts of everything that the input object listed as true, counted in the array passed.
* `eqArrays(array1, array2)`: Returns true if array1 and array2 are equal.
* `eqObjects(object1, object2)`: Returns true if object1 and object2 are equal.
* `findKey(object, callback)`:  Returns the key for the first value in object where the callBack function returns true.   
* `findKeyByValue(object, value)`: Returns the first key in object where the value matches the passed value.
* `flatten(array)`: Returns the flat version of the array passed. Only one nested level implemented.
* `letterPositions(sentence)`: Returns an array of 0 based indices of positions of each character in the sentence string where each character is found.
* `map(array, callback)`: Returns a new array with the callback function applied to all elements within the input array.
* `takeUntil(array, callback)`: Returns the array until the element for which the callback returns a true value.
* `without(array1, array2 )`: Returns an array of elements in array1 without the elements in array2.

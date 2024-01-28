"use strict";

/**
 * Given an array of numbers sorted in ascending order
 * find the floor of a given value from the array.
 *  The floor of the value will be the biggest element
 *  in the given array smaller
 * than or equal to the ‘key’
 *  Return -1 if there isn't a floor
 * @param {number} value - value to find the floor for
 * @param {number[]} list -list of numbers to find floor from
 * @return {number} index  of the floor of the given number fro marray
 */
export default function getValueFloorIndexFrom(value, list) {
  if (!Array.isArray(list) || (!value && value !== 0)) {
    throw new Error("list must be an array and value a number ");
  }
  let [startIndex, endIndex] = [0, list.length - 1];
  while (startIndex < endIndex) {
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (list[middleIndex] === value) return middleIndex;
    if (list[middleIndex] > value) {
      endIndex = middleIndex;
    } else {
      startIndex = middleIndex + 1;
    }
  }
  if (list[startIndex - 1] < value) return startIndex - 1;
  return -1;
}

//console.log(getValueFloorIndexFrom(6, [1, 2, 3, 5, 6, 7, 8, 9]));

//time complexity o(n) n is the length of the list
// space complexity o(1)

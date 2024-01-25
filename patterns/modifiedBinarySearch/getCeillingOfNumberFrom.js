"use strict";
/**
 * Given an array of numbers sorted in an ascending order, find ceilling index
 * of a given number . The ceilling of the number will be the smallest
 * element in the given array greater than or equal to the number.
 * @param {number} n - number to find ceilling index
 * @param {number[]} list - ascending ordered list to find the ceilling from.
 * @returns {number} index - celling number index from the list .
 */
export default function getCeillingOfNumberFrom(n, list) {
  if (!Array.isArray(list))
    throw new Error("list must be an ascending ordered array");
  // use binary search approach to traverse the list and find the ceilling
  let [startIndex, endIndex] = [0, list.length - 1];
  while (startIndex <= endIndex) {
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (list[middleIndex] === n) return middleIndex;
    if (list[middleIndex] < n) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
  //check if theremaining is greater than n
  if (list[startIndex] > n) return startIndex;
  return -1;
}

console.log(getCeillingOfNumberFrom(5, [0, 1, 6, 11, 23]));
// time complexity  o(logn) space o(1), n is is list length

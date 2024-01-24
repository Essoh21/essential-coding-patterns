"use strict";

/**
 * Given a sorted array of numbers, find the
 * the index of a given number. The array could
 * be sorted in ascending or descending order.
 * @param {number[]} sortedList - list of sorted numbers
 * @param {number} n - the number to find index of
 * @return {number } index - the index of n
 */

export default function findIndexOf(sortedList, n) {
  if (!Array.isArray(sortedList))
    throw new Error("sortedList must be an array");
  let [start, end] = [0, sortedList.length - 1];

  const isSortedInAscending = sortedList[start] <= sortedList[end];
  while (start <= end) {
    console.log("inside");
    const middle = start + Math.floor((end - start) / 2);
    if (sortedList[middle] === n) {
      return middle;
    }
    if (isSortedInAscending) {
      if (sortedList[middle] < n) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    } else {
      if (sortedList[middle] < n) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }
  }
  return -1;
}

// console.log(findIndexOf([4, 3, 2, 1, 0], 1)) ;
// time o(n) where is sortedList length
// space o(1)

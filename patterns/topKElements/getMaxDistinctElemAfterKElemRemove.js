"use strict";

/**
 * Given an array of numbers and a number K, remove K numbers
 * from the array such that the array is left with maximum
 *  distinct numbers
 * @param {number[]} numbers - array of numbers
 * @param {number} k - number of elements remove from the array
 * @returns {number[]} result - remaining array after K numbers remove
 */

function getMaxDistinctElemAfterKElemRemove(numbers, k) {
  if (!Array.isArray(numbers) || typeof k !== "number" || k > numbers.length)
    throw new Error("invalid inputs");

  const numbersMap = new Set();
  const result = [];
  // traverse numbers and store numbers that are not duplicated and reduce K at each duplication
  for (const n of numbers) {
    if (!numbersMap.has(n)) {
      result.push(n);
      numbersMap.add(n);
    } else {
      if (k > 0) {
        k -= 1;
      } else {
        result.push(n);
      }
    }
  }

  // return stored list if k ===0 else remove the remaining k numbers
  return k === 0 ? result : result.slice(k);
}

console.log(
  getMaxDistinctElemAfterKElemRemove([7, 0, 4, 3, 1, 5, 7, 1, 3, 3, 2], 3)
);

// time and space complexity o(n) , n is the length of the input array

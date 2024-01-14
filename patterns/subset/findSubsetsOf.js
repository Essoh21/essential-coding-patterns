"use strict";

/**
 * Given a set of numbers that might contain
 * duplicates, find all of its distinct subsets.
 * @param {Array} list - set of numbers
 * @returns {Array}  subsets - list of all distincts subsets
 */
export default function findSubsetOf(set) {
  if (!Array.isArray(set)) throw new Error("set must be an array");
  const subsets = [[]];
  const numbersMap = new Set();

  // traverse the set and collect subsets
  for (let i = 0; i < set.length; i += 1) {
    const currentSubsetsLenght = subsets.length;
    const currentNumber = set[i];
    if (!numbersMap.has(currentNumber)) {
      for (let j = 0; j < currentSubsetsLenght; j += 1) {
        subsets.push([...subsets[j], currentNumber]);
      }
    }
    numbersMap.add(currentNumber);
  }
  return subsets;
}

// console.log(findSubsetOf([1, 3, 4, 3]));

// o(2^n) time and space complexity

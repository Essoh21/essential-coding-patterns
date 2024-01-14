"use strict";

/**
 * Given a set with distinct elements, find
 * all of its distinct subsets.
 * @param {Array} set -set of distinct elements
 * @returns {Array} list - list of all subsets
 */
export default function findAllSubsets(set) {
  //make sure it is an array
  if (!Array.isArray(set))
    throw new Error("set must be an array of distinct elements");
  const subsets = [[]];
  //traverse set and add found numbers to all existing sets in subsets
  for (let i = 0; i < set.length; i += 1) {
    const currentSubsetsLenght = subsets.length;
    for (let j = 0; j < currentSubsetsLenght; j += 1) {
      subsets.push([...subsets[j], set[i]]);
    }
  }
  return subsets;
}

// console.log(findAllSubsets([1, 5, 3]), "all subsets");
//o(2^n) space and time complexity

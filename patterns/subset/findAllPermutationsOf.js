"use strict";

/**
 * Given a set of distinct numbers,
 *  find all of its permutations.
 * @param {number[]} list - set of distinct numbers
 * @returns {Array} list - set of all permutations
 */
export default function findAllPermutationsOf(list) {
  if (!Array.isArray(list)) throw new Error("list must be an array");
  const permutations = [];

  /**
   * closure to traverse list and add permutations
   * @param {number[]} current - partial pemutation being built
   */
  function backtrack(current) {
    if (current.length === list.length) {
      permutations.push([...current]);
      return;
    }
    for (const number of list) {
      if (current.includes(number)) continue;
      current.push(number);
      backtrack(current);
      current.pop();
    }
  }

  backtrack([]);
  return permutations;
}

console.log(findAllPermutationsOf([1, 3, 2]));
// o(n!) time and o(n) space complexity. n is the legth of list

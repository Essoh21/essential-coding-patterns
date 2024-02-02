"use strict";
/**
 * Given an unsorted array of numbers, find the top k
 * frequentely occuring numbers int it.
 * @param {number[]} -list of  unsorted numbers
 * @param {number} k - the number of frequent numbers to get
 * @returns {number[]} result - list containing top k frequent numbers.
 */
export default function getTopKfrequentNumbers(list, k) {
  if (!Array.isArray(list) || typeof k !== "number" || (!k && k !== 0))
    throw new Error("invalid inputs");

  // traverse list and record numbers with their frequency
  const numbersMap = new Map();
  for (const num of list) {
    numbersMap.set(num, (numbersMap.get(num) || 0) + 1);
  }

  // save those objects into a sorted array  and return top k of them
  const sortedUniqueNumbers = Array.from(numbersMap.keys()).sort(
    (a, b) => numbersMap.get(b) - numbersMap.get(a)
  );
  return sortedUniqueNumbers.slice(0, k);
}

console.log(
  getTopKfrequentNumbers([0, 2, 1, 0, 3, 5, 1, 11, 12, 11, 1, 12], 2)
);

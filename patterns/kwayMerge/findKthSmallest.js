"use strict";
/*
Given M sorted arryas, find the kth smallest number 
among all the arrays. 
*/
/**
 *
 * @param {number[][]} listOfSortedArrays - an array containing sorted arrays
 * @param {number} k
 * @returns
 */

const findDthSmallest = (listOfSortedArrays, k) => {
  // merge all arrays into one
  const merged = mergeKlist(listOfSortedArrays);
  // return the kth element from the merged array
  return merged[k - 1]; // since array is zero indexed
};

const mergeKlist = (sortedArrays) => {
  if (!Array.isArray(sortedArrays)) throw new Error("input must be an array");
  const merged = [];
  for (const arr of sortedArrays) {
    if (!Array.isArray(arr) || arr.some(isNaN)) {
      throw new Error(
        "Each element of the input must be a sorted array of numbers."
      );
    }
    merged.push(...arr);
  }
  merged.sort((a, b) => a - b);
  return merged;
};

/* this approach solve  the problem with o(nlogn) time and o(n) space where n is 
 the total number of elements across all arrays. this is not
 efficient  if arrays are large
 we can reduce it to o(MlogN) time and o(1)  space where M is max length
 length or arrays and N the total number of arrays using binarySearch approach
 
 We can also use minHeap and fing instead of sorting .
 */

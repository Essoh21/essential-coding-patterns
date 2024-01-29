"use strict";

/**
 * Given an array of numbers, use merge sort algorithm to sort
 * numbers ascendent
 * @param{number[]} list -list of numbers
 * @returns {number[]} result -list of sorted numbers (ascendent)
 */

export default function mergeSort(list) {
  if (!Array.isArray(list)) throw new Error("list must be an array");
  if (list.length === 1) return list;
  //continually divide list in two part until get one element in each part
  const middle = Math.floor(list.length / 2);
  const [left, right] = [list.slice(0, middle), list.slice(middle)];
  const [sortedLeft, sortedRight] = [mergeSort(left), mergeSort(right)];
  return merge(sortedLeft, sortedRight);
}

/**
 *Given to sorted arrays, merge them into one sorted array
 *@param {number []} leftArray -first sorted array
 *@param {number []} rightArray -second sorted array
 *@return {number[]} result - merged sorted array
 */
const merge = (leftArray, rightArray) => {
  if (!Array.isArray(leftArray) || !Array.isArray(rightArray))
    throw new Error("inputs must be arrays");
  let [leftIndex, rightIndex] = [0, 0];
  const result = [];
  //compare elements and merge
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(rightArray[rightIndex]);
      rightIndex += 1;
    }
  }
  // remember to add remaining element of the largest array
  return result.concat(
    leftArray.slice(leftIndex),
    rightArray.slice(rightIndex)
  );
};

//console.log(mergeSort([1, 0, 3, 2, 7, -2]));
// time o(nlogn) n is the length of the list
// space o(n)

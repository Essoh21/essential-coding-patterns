"use strict";
/*
Given an array of integers and two numbers
 k1 and k2. Find the sum of all elements between
  given two k1’th and k2’th smallest elements of
   the array. It may be assumed that (1 <= k1 < k2 <= n)
    and all elements of array are distinct.
Exemple : Input : arr[] = {10, 2, 50, 12, 48, 13},
 k1 = 2, k2 = 6 
Output : 73 
*/
/**
 *
 * @param {number[]} list list of numbers
 * @param {number} k1 -lower bound
 * @param {number} k2 -upper bound
 * @returns {number} sum - sum  of element between k1 to k2 smallest elements of list
 */

const getSumBetweenTwoKthSmallest = (list, k1, k2) => {
  if (!Array.isArray(list) || list.length === 0 || k1 > k2 || !k1 || !k2)
    throw new Error("invalid inputs. list must be non-empty array and k1 < k2");
  //order list elements
  list.sort((a, b) => a - b);
  // compute the sum from k1th element to k2th element
  let [start, sum] = [k1, 0];
  while (start < k2 - 1) {
    sum += list[start];
    start += 1;
  }
  return sum;
};
//time complexity o(nlogn), n is the length of list
//space complexity o(1)

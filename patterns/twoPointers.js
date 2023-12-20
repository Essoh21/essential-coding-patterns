"use strict ";
/* 
Given an array of sorted numbers and a target sum, 
find a pair in the array whose sum is equal 
to the given target.
*/

const getPairSummedToSum = (sortedList, sum) => {
  if (!Array.isArray(sortedList) || typeof sum !== "number") {
    throw new Error(
      "Invalid input. Please provide a sorted list (array) and a target sum (number)."
    );
  }

  let currentSum = 0;
  let result = [];
  let [left, right] = [0, sortedList.length - 1];

  while (left < right) {
    currentSum = sortedList[left] + sortedList[right];

    if (currentSum === sum) {
      result = [sortedList[left], sortedList[right]];
      break;
    }
    if (currentSum < sum) {
      left += 1;
    }
    if (currentSum > sum) {
      right -= 1;
    }
  }
  return result;
};

console.log(getPairSummedToSum([1, 3, 4, 5, 6], 8));

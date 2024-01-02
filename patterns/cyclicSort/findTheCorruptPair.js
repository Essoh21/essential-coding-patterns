"use strict";
/**
 *
 * @param{Array} -unsorted list of n numbers taken
 *  from the range 1 to n that can contain one duplicate numbers
 * @returns{Array} duplicate number and missing number
 */

const findTheCorruptPair = (listOfNumbers) => {
  if (!Array.isArray(listOfNumbers)) {
    throw new Error("listOfNumbers must be an array of integers");
  }

  //sort the array in place
  let i = 0;
  while (i < listOfNumbers.length) {
    const valueCorrectIndex = listOfNumbers[i] - 1;
    const isValueAtCorrectIndex =
      listOfNumbers[i] === listOfNumbers[valueCorrectIndex];
    if (!isValueAtCorrectIndex) {
      [listOfNumbers[i], listOfNumbers[valueCorrectIndex]] = [
        listOfNumbers[valueCorrectIndex],
        listOfNumbers[i],
      ];
    } else {
      i += 1;
    }
  }
  // traverse the sorted array and find the duplicate and missing number
  for (let j = 0; j < listOfNumbers.length; j += 1) {
    if (listOfNumbers[j] !== j + 1) {
      return [listOfNumbers[j], j + 1];
    }
  }
  // if there is no corrupted number return []
  return [];
};

console.log(findTheCorruptPair([3, 4, 2, 3, 6, 5]));

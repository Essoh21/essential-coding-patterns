"use strict";
/**
 *
 * @param {Array}  unsorted list of n numbers from the range 1 to n with possible duplications
 * @returns{Array} list of all duplicated numbers without using any extra space.
 */

function findAllDuplicate(listOfNumbers) {
  if (!Array.isArray(listOfNumbers)) {
    throw new Error("listOfNumbers must be an array");
  }

  //sort the array the array in place
  let i = 0;
  while (i < listOfNumbers.length) {
    const currentValueCorrectIndex = listOfNumbers[i] - 1;
    const isCurrentValeAtCorrectIndex =
      listOfNumbers[i] === listOfNumbers[currentValueCorrectIndex];

    if (!isCurrentValeAtCorrectIndex) {
      [listOfNumbers[i], listOfNumbers[currentValueCorrectIndex]] = [
        listOfNumbers[currentValueCorrectIndex],
        listOfNumbers[i],
      ];
    } else {
      i += 1;
    }
  }

  // traverse the sorted array and find duplicate numbers

  const numbersDuplicated = [];

  for (let j = 0; j < listOfNumbers.length; j += 1) {
    if (listOfNumbers[j] !== j + 1) {
      numbersDuplicated.push(listOfNumbers[j]);
    }
  }
  return numbersDuplicated;
}

//try
console.log(findAllDuplicate([5, 4, 7, 2, 3, 5, 3]));
// o(n) time and o(1) space complexity

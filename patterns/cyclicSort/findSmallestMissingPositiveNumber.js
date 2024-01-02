"use strict";
/**
 * @param{Array} -unsorted list of numbers
 * @returns{number} -the smallest missing Positive number
 */

function findtheSmallestMissingPositiveNumber(listOfNumbers) {
  if (!Array.isArray(listOfNumbers)) {
    throw new Errow("list of numbers must be an array ");
  }
  // sort positive numbers and ignore negative and number > list length
  // zero is not considered positive number
  let i = 0;
  let n = listOfNumbers.length;

  while (i < n) {
    const valueCorrectIndex = listOfNumbers[i] - 1;
    if (
      listOfNumbers[i] !== listOfNumbers[valueCorrectIndex] &&
      listOfNumbers[i] > 0 &&
      listOfNumbers[i] <= n
    ) {
      [listOfNumbers[i], listOfNumbers[valueCorrectIndex]] = [
        listOfNumbers[valueCorrectIndex],
        listOfNumbers[i],
      ];
    } else {
      i++;
    }
  }

  for (let i = 0; i < n; i++) {
    console.log(listOfNumbers);
    console.log(listOfNumbers[i] === i + 1);
    if (listOfNumbers[i] !== i + 1) {
      return i + 1;
    }
  }

  return listOfNumbers.length + 1;
}

//o(n) time and o(1) space
console.log(findtheSmallestMissingPositiveNumber([1, 2, 3, 4]));

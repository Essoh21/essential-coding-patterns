"use strict";
/**
 * @param{Array} -unsorted list of numbers
 * @returns{Array} first k missing positive numbers
 *
 */

function findKMissingPositiveNumbers(listOfNumbers, k) {
  if (!Array.isArray(listOfNumbers)) {
    throw new Error("listOfNumbers must be an array");
  }

  //sort positive values ad ignore all negative numbers and numbers>array.length
  const n = listOfNumbers.length;
  const missingNumbers = [];
  let i = 0;
  while (i < n) {
    const currentNumberCorrectPosition = listOfNumbers[i] - 1;
    const isNumberAtCorrectPosition =
      listOfNumbers[i] === listOfNumbers[currentNumberCorrectPosition];
    if (
      !isNumberAtCorrectPosition &&
      listOfNumbers[i] > 0 &&
      listOfNumbers[i] <= n
    ) {
      [listOfNumbers[i], listOfNumbers[currentNumberCorrectPosition]] = [
        listOfNumbers[currentNumberCorrectPosition],
        listOfNumbers[i],
      ];
    } else {
      i += 1;
    }
  }

  const extraNumebers = new Set();
  //traverse the sorted array and get 5 first missing numbers
  for (let i = 0; i < n; i += 1) {
    if (listOfNumbers[i] !== i + 1 && missingNumbers.length < k) {
      missingNumbers.push(i + 1);
      extraNumebers.add(listOfNumbers[i]);
    }
  }

  // complete missing numbers with numbers outside the array length if necessary
  let nextMissingNumber = n + 1;

  while (missingNumbers.length < k) {
    if (!extraNumebers.has(nextMissingNumber)) {
      missingNumbers.push(nextMissingNumber);
    }
    nextMissingNumber += 1;
  }
  return missingNumbers;
}

console.log(findKMissingPositiveNumbers([1, 1, 3, 2, 5], 2));
// time o(n) space o(K)

"use strict";
/**
 * You are given an unsorted array containing numbers
 * taken from the range 1 to n The array can have duplicates,
 * which means that some numbers will be missing.
 *  Find all the missing numbers.
 *  @param{array} -list of numbers in the range 1 to n
 * @returns{array} -list of missing numbers
 */
const findMissingNumbers = (listOfNumbers) => {
  if (!Array.isArray(listOfNumbers)) {
    throw new Error("param must be an array");
  }
  const listCopy = listOfNumbers.slice();
  for (let i = 0; i < listCopy.length; i += 1) {
    if (listCopy[Math.abs(listCopy[i]) - 1] > 0) {
      listCopy[Math.abs(listCopy[i]) - 1] =
        -listCopy[Math.abs(listCopy[i]) - 1];
    }
  }
  let missingNumbers = [];
  for (let i = 1; i < listCopy.length; i += 1) {
    if (listCopy[i] > 0) {
      missingNumbers.push(i + 1);
    }
  }
  return missingNumbers;
};

console.log(findMissingNumbers([2, 1, 5, 3, 2, 5]));

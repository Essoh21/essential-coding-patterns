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
  /* const listCopy = listOfNumbers.slice();
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
  return missingNumbers; */

  /* // another method
  //create a fix array of the same length filled with o's.
  const orderedNumbers = new Array(listOfNumbers.length).fill(0);

  // travese origninal list and place values to their corresponding place in the second list
  for (const num of listOfNumbers) {
    orderedNumbers[num - 1] = num;
  }

  const missingNumbers = [];

  // traverse the second list and where there is an 0 is a missing number
  for (let i = 0; i < orderedNumbers.length; i += 1) {
    if (orderedNumbers[i] === 0) {
      missingNumbers.push(i + 1);
    }
  }
  return missingNumbers;
  // time complexity O(n)
//space complexity: 0(n)
  */

  // use cyclic sort

  let i = 0;
  const missingNumbers = [];
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

  // traverse to find missing numbers

  for (let i = 0; i < listOfNumbers.length; i += 1) {
    if (listOfNumbers[i] !== i + 1) {
      missingNumbers.push(i + 1);
    }
  }
  return missingNumbers;
};

console.log(findMissingNumbers([2, 1, 5, 3, 2, 3, 5]), "missing numbers");
// time complexity o(n) et space complexity o(1)

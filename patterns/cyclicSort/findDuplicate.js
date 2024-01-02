"use strict";
/**
 *
 * @param {Array} -list of n+1 taken numbers from the range 1 to n
 * @returns{number} -duplicated number without using any extra space
 *
 */

const findDuplicate = (listOfNumbers) => {
  if (!Array.isArray(listOfNumbers)) {
    throw new Errow("listOfNumbers must be an array");
  }
  //sort the input array in place by placing each number into its position
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

  // traverse the sorted array and find duplicate number
  console.log(listOfNumbers);
  for (let i = 0; i < listOfNumbers.length; i += 1) {
    if (listOfNumbers[i] !== i + 1) return listOfNumbers[i];
  }
  //if the array does not contain any duplicate return -1
  return -1;
};

// try
console.log(findDuplicate([1, 3, 1, 5, 4]));

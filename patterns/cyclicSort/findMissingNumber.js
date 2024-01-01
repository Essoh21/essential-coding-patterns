"use strict";
/**
 *  given an array containing n distinct numbers taken
 * from the range 0 to n. Since the array has only
 *  n numbers out of the total n+1 numbers,
 * find the missing number.
 * @param{Array} -list of numbers
 * @returns{number}  -missing number
 */
function findMissingNumber(listOfNumbers) {
  /* if (!Array.isArray(listOfNumbers)) {
    throw new Error("listofNumbers must be an array");
  }

  
  const allNumbers = new Array(listOfNumbers.length + 1).fill(-1);
  // place all numbers into their respective places
  for (const number of listOfNumbers) {
    allNumbers[number] = number;
  }
  // traverse allNumbers to find the missing number

  for (let i = 0; i < allNumbers.length; i += 1) {
    if (allNumbers[i] === -1) return i;
  }
   //o(n) space and time complexity 
  */

  // use cyclic sort algo
  let i = 0;
  while (i < listOfNumbers.length) {
    const isCurrentNumberInCorrectPlace = i === listOfNumbers[i];
    if (
      listOfNumbers[i] !== listOfNumbers.length &&
      !isCurrentNumberInCorrectPlace
    ) {
      // order that number
      const numberInCurrentIndex = listOfNumbers[i];
      listOfNumbers[i] = listOfNumbers[numberInCurrentIndex];
      listOfNumbers[numberInCurrentIndex] = numberInCurrentIndex;
    } else {
      i += 1;
    }
  }

  // traverse listOfNumbers to find missing number
  for (let i = 0; i < listOfNumbers.length; i += 1) {
    if (i !== listOfNumbers[i]) return i;
  }

  // if all numbers are correctely placed then the missing number is n
  return listOfNumbers.length;
}

// try
console.log(findMissingNumber([7, 3, 5, 2, 4, 6, 0, 1]));
//o(n) time complexity and o(1) space complexity

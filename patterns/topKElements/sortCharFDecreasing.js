"use strict";
/**
 * Given a string, sort it based on the decreasing
 * frequency of its characters.
 * @param {string} str -string to sort
 * @returns {string}  sorted string
 */

const sortCharFDecreasing = (str) => {
  if (typeof str !== "string") throw new Error("parameter must be a string ");
  // split string
  const characters = str.split("");

  // create a string map with respective letters count
  const charMap = new Map();
  for (const char of characters) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  // create decreased order  frequency  array of characters
  const sortedChars = Array.from(charMap.keys()).sort((a, b) => {
    return charMap.get(b) - charMap.get(a);
  });

  // get sorted string and return it
  let sortedString = "";
  for (const char of sortedChars) {
    sortedString += char.repeat(charMap.get(char));
  }
  return sortedString;
};

console.log(sortCharFDecreasing("excellent"), "sorted str");

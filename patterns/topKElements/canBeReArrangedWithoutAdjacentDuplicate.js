"use strict";
/*
Given a string, find if its letters can be 
rearranged in such a way that no two same 
characters come next to each other.
*/
/**
 *
 * @param {str} str -string to evaluate
 * @returns {boolean} true if str can be rearranged
 */
const canBeReArrangedWithoutAdjacentDuplicate = (str) => {
  // make sure str is a string
  if (typeof str !== "string") throw new Error("str must be a string");

  // create a map of string characters and store characters with their number of repetition
  const numberOfCharsOfStr = str.length;
  const charsMap = new Map();
  const chars = str.split("");
  for (const char of chars) {
    charsMap.set(char, (charsMap.get(char) || 0) + 1);
  }

  //if a character frequency is greater that the length of string then false
  const halfOfNChars = Math.ceil(numberOfCharsOfStr / 2);
  for (const value of charsMap.values()) {
    if (value > halfOfNChars) return false;
  }

  return true;
};

// time complexity o(n) n is the length of str
// space complexity o(k) k is the number of distinct chars in str
//console.log(canBeReArrangedWithoutAdjacentDuplicate("aabbaad     "));

"use strict";

/*
Given a string and a number K, find if the string 
can be rearranged such that the same characters are
 at least K distance apart from each other.
*/
// let just use a greedy approach for this

/**
 *
 * @param {string} str - input string
 * @param {number} k number of characters between two same chars
 * @returns{boolean} true if the string can be rearranged and false otherwise
 */
const canRearrangeString = (str, k) => {
  if (typeof str !== "string" || !k || str.length < k)
    throw new Error("invalid inputs");
  let rearranged = "";

  // store chars with their frequences
  const charsMap = new Map();
  for (const char of str) {
    charsMap.set(char, (charsMap.get(char) || 0) + 1);
  }

  // create a sorted queue for chars and their frequences

  const queue = [];

  for (const [char, n] of charsMap) {
    queue.push([char, n]);
  }
  queue.sort((a, b) => b[1] - a[1]); // sort descendent

  // traverse the queue and construct the rearranged string. return true if possible
  while (queue.length > 0) {
    const nCharsToAdd = Math.min(k, str.length - rearranged.length);
    const temporars = [];
    for (let i = 0; i < nCharsToAdd; i += 1) {
      if (queue.length === 0) return false;
      const [char, n] = queue.shift();
      rearranged += char;
      if (n > 1) {
        temporars.push([char, n - 1]);
      }
    }
    while (temporars.length > 0) {
      queue.push(temporars.pop());
    }
    queue.sort((a, b) => b[1] - a[1]); //may be better to use MaxHeap in production but it can pass for an interview
  }
  return true;
};

//console.log(canRearrangeString("ab", 2));

"use strict";

/**
 * Given an array of lowercase letters
 * sorted in ascending order, find the
 *  smallest letter in the given
 *  array greater than a given key.
 * @param {string[]} list - sorted ascendent array
 * @param { string} letter - letter to use for finding.
 *
 */

export default function getNextLetter(list, letter) {
  if (!Array.isArray(list)) throw new Error("list must be an array");
  const n = list.length;
  let [start, end] = [0, n - 1];

  while (start <= end) {
    const middleIndex = Math.floor((start + end) / 2);

    if (letter < list[middleIndex]) {
      end = middleIndex - 1;
    } else {
      start = middleIndex + 1;
    }
  }
  // since the loop is running until 'start <= end', so at the end of the while loop, 'start === end+1'
  return list[start % n];
}

console.log(getNextLetter(["a", "d", "f", "k"]));

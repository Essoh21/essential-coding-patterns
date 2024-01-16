"use strict";
/**
 * Given a string, find all of its permutations preserving
 * the character seqquence but changing case.
 * @param {string} str -string
 * @returns {string[]} result - list of character case permutated
 *
 */
export default function getCasesPermutations(str) {
  if (!str || typeof str !== "string") throw new Error("invalid input");
  const result = [];
  /**
   * closure to traverse str characters and permute character case
   * @param {string} currentPartial -partial permutation being built
   * @param {number} cPartialLength current partial permuted string length
   */
  function generatePermutation(currentPartial, cPartialLength) {
    const INPUT_STRING_LENGTH = str.length;
    if (cPartialLength === INPUT_STRING_LENGTH) {
      result.push(currentPartial);
      return;
    }
    //consider both lowercase and uppercase version of the current;
    const isCurrentCharacterLetter = /^[a-zA-Z]$/.test(str[cPartialLength]);
    if (isCurrentCharacterLetter) {
      generatePermutation(
        currentPartial + str[cPartialLength].toLowerCase(),
        cPartialLength + 1
      );
      generatePermutation(
        currentPartial + str[cPartialLength].toUpperCase(),
        cPartialLength + 1
      );
    } else {
      generatePermutation(
        currentPartial + str[cPartialLength],
        cPartialLength + 1
      );
    }
  }
  generatePermutation("", 0);
  return result;
}

// console.log(getCasesPermutations("abc"));

// o(2^n) time and space complexity

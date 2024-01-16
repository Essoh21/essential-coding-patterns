"use strict";

/**
 * Generate all combinations of N pairs of balanced parentheses.
 * @param {number} N - Number of pairs
 * @returns {string[]} - List of combinations
 */
function generateParenthesis(N) {
  const result = [];

  /**
   *  function to generate combinations.
   * @param {string} current - Current combination being built
   * @param {number} open - Number of open parentheses used so far
   * @param {number} close - Number of close parentheses used so far
   */
  function generate(current, open, close) {
    if (current.length === 2 * N) {
      result.push(current);
      return;
    }

    if (open < N) {
      generate(current + "(", open + 1, close);
    }

    if (close < open) {
      generate(current + ")", open, close + 1);
    }
  }

  generate("", 0, 0);
  return result;
}

const N = 4;
const combinations = generateParenthesis(N);
console.log(combinations);

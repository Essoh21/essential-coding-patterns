"use strict";

/**
 *
 * @param {string} input -expression to evaluate with balanced parenthesis placed
 * @returns {number[]} result -list of results from all possible evaluations
 */
function getDiffWaysToEvaluate(input) {
  function compute(left, right, operator) {
    const results = [];
    for (const l of left) {
      for (const r of right) {
        if (operator === "+") {
          results.push(l + r);
        } else if (operator === "-") {
          results.push(l - r);
        } else if (operator === "*") {
          results.push(l * r);
        }
      }
    }
    return results;
  }

  if (!isNaN(input)) {
    return [parseInt(input)];
  }

  const result = [];
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (["+", "-", "*"].includes(char)) {
      const leftPart = getDiffWaysToEvaluate(input.slice(0, i));
      const rightPart = getDiffWaysToEvaluate(input.slice(i + 1));
      result.push(...compute(leftPart, rightPart, char));
    }
  }

  return result;
}

const expression = "5-1+3+8";
const result = getDiffWaysToEvaluate(expression);
console.log(result);

"use strict";
import Heap from "../../lib/Heap.js";
/**
 * Given a set of investment projects with their respective
 *  profits, we need to find the most profitable projects.
 *  We are given an initial capital and are allowed to invest
 * only in a fixed number of projects. Our goal is to choose
 *  projects that give us the maximum profit. Write a
 * function that returns the maximum total capital after
 *  selecting the most profitable projects.
 * @param {number[]} projectsCapitals -list of project capitals
 * @param {number[]} projectsProfits list of project profits
 * @param {number} capital - initial given capital
 * @param {number} n -number of projects to select
 * @returns {number} maxCapital - maximum total capital after selecting the most profitable projects
 */
function getMaxTotalCapital(projectsCapitals, projectsProfits, capital, n) {
  // validate inputs
  if (!Array.isArray(projectsCapitals) || !Array.isArray(projectsProfits)) {
    throw new Error("projectsCapitals and projectsProfits must be arrays");
  }
  if (
    typeof n !== "number" ||
    !n ||
    typeof capital !== "number" ||
    (!capital && capital !== 0)
  ) {
    throw new Error(" capital and n must be  numbers");
  }

  // buy projects when total number of projects to buy is grater than 0
  const indexesMap = {};
  while (n > 0) {
    // traverse projectsCapitals and get the max number that is lower than or equal to capital and its index;
    const maxHeap = new Heap((a, b) => a > b); // to store numbers greater than capital
    for (let i = 0; i < projectsCapitals.length; i += 1) {
      if (projectsCapitals[i] <= capital) {
        maxHeap.insert(projectsCapitals[i]);
        indexesMap["index_" + projectsCapitals[i]] = i;
      }
    }
    const projectToInvestIn = maxHeap.peek();
    const index = indexesMap["index_" + projectToInvestIn];
    capital += projectsProfits[index];
    //buy that project and  get the benefit and update capital
    n -= 1;
  }

  return capital;
}

console.log(getMaxTotalCapital([0, 1, 2, 3], [1, 2, 3, 5], 0, 3));

// time complexity o(nlogN) where n is the number of projects to select and N the number of projects capitals
// space complexity o(N)

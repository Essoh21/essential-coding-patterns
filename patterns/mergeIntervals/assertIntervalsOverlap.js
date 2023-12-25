"use strict";
/* 

Given a set of intervals, find out if any two intervals overlap.
*/
const assertIntervalsOverlap = (listOfIntervals) => {
  // make sure that param is a list of intervals
  if (!Array.isArray(listOfIntervals)) {
    throw "function param must be a list of intervals";
  }

  for (const interval of listOfIntervals) {
    if (!Array.isArray(interval) || !(interval.length === 2)) {
      throw "each element of the list must be an interval";
    }
  }

  // set result to false and loop over intervals and check two of them overlap

  let result = false;

  const listSorted = listOfIntervals.sort((a, b) => a[0] - b[0]); // sort intervals
  for (let i = 1; i < listSorted.length; i += 1) {
    const currentInterval = listSorted[i];
    const previousInterval = listSorted[i - 1];
    const intervalsOverlaps = previousInterval[1] > currentInterval[0];
    if (intervalsOverlaps) {
      result = true;
      break;
    }
  }
  return result;
};

console.log(
  assertIntervalsOverlap([
    [1, 2],
    [3, 5],
    [2, 6, 1],
  ]),
  "______expect true"
);

// time complexity : o(nlogn)
// space complexity: o(1)

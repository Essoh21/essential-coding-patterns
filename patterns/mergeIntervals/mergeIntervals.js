"use strict";
/*
Given a list of intervals, merge all the overlapping intervals
 to produce a list with only mutually exclusive intervals.
*/

const mergeOverlapingIntervals = (listOfIntervals) => {
  //input check
  if (!Array.isArray(listOfIntervals))
    throw new Error("input must be an array");
  // Ensure each interval is a valid array with two elements
  for (const interval of listOfIntervals) {
    if (!Array.isArray(interval) || interval.length !== 2) {
      throw new Error("Each interval must be an array with two elements");
    }
  }
  // handle situation of zero or one interval
  if (listOfIntervals.length < 2) return listOfIntervals;
  // sort the list of intervals by their start
  const intervals = listOfIntervals.sort((a, b) => a[0] - b[0]);
  // loop over the sorted list of intervals and merge ovalaping ones

  for (let i = 1; i < intervals.length; i += 1) {
    let currentInterval = intervals[i],
      previousInterval = intervals[i - 1];
    // merge overlaping intervals
    if (currentInterval[0] < previousInterval[1]) {
      const mergedInterval = [
        previousInterval[0],
        Math.max(previousInterval[1], currentInterval[1]),
      ];
      intervals[i] = mergedInterval;
      intervals.splice(i - 1, 1);
      i -= 1; // decrease i value since we removed an inteval
    }
  }

  return intervals;
};

console.log(
  mergeOverlapingIntervals([
    [1, 4],
    [2, 6],
    [3, 5],
  ]),
  "merge____________expected to be  [ [ 1, 6 ] ]"
);

// time complexity o(nlogn)
// space complexity o(n)

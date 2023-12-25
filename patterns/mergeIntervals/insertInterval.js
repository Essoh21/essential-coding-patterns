"use strict";

/* 
 Given a list of non-overlapping intervals sorted by 
 their startTime, insert a given interval at the correct
  position and merge all necessary intervals to produce 
 a list that has only mutually exclusive intervals.
*/
const insertInterval = (listOfIntervals, newInterval) => {
  // check that input is a list of intervals
  if (!Array.isArray(listOfIntervals || !Array.isArray(newInterval))) {
    throw new Error("in put must be an array ");
  }

  for (const interval of listOfIntervals) {
    if (!Array.isArray(interval) || !(interval.length === 2)) {
      throw new Error("list must be a list of intervals");
    }
  }

  if (!Array.isArray(newInterval) || !(newInterval.length === 2)) {
    throw new Error("you must provide an interval and of length 2");
  }

  // save all intervals with and end < newInterval start
  const mergedList = [];
  let i = 0;
  while (i < listOfIntervals.length && listOfIntervals[i][1] < newInterval[0]) {
    mergedList.push(listOfIntervals[i]);
    i += 1;
  }

  // merge all intervalls that overlap newInterval
  while (
    i < listOfIntervals.length &&
    listOfIntervals[i][0] <= newInterval[1]
  ) {
    newInterval[0] = Math.min(listOfIntervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(listOfIntervals[i][1], newInterval[1]);
    i += 1;
  }

  // Insert the new interval
  mergedList.push(newInterval);

  // add the rest of intervals to mergeList

  while (i < listOfIntervals.length) {
    mergedList.push(listOfIntervals[i]);
    i += 1;
  }
  return mergedList;
};

// test it

const resutl = insertInterval(
  [
    [0, 3],
    [4, 7],
  ],
  [1, 4]
); // expect [[0,7]]

console.log(resutl, "_________result");

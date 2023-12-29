"use strict";
/**
 * For K employees, we are given a list of intervals
 * representing the working hours of each employee.
 * Our goal is to find out if there is a free interval
 *  that is common to all employees. You can assume that
 * each list of employee working hours is sorted on
 *  the startTime
 * @param{Array} list -list of intervals
 * @returns{Array} list free intervals that are common to employees
 *
 */

const findFreeCommonIntervals = (list) => {
  // make sure list is an interval
  if (!Array.isArray(list)) {
    throw new Error("list must be an array");
  }
  // put all employees work interals into one list
  const allIntervals = [];
  const freeTimes = [];
  for (let i = 0; i < list.length; i += 1) {
    for (let j = 0; j < list[i].length; j += 1) {
      allIntervals.push(list[i][j]);
    }
  }

  // sort allIntervals on start time
  allIntervals.sort((a, b) => a[0] - b[0]);
  /* make sure allInterval is at least length 2 */

  if (allIntervals.length < 2) {
    throw new Error(
      "you have less than two working interval. find  it yourself"
    );
  }
  // merge overlapping intervals
  for (let i = 1; i < allIntervals.length; i += 1) {
    const [previous, current] = [allIntervals[i - 1], allIntervals[i]];
    const currentOverlapPrevious = current[0] <= previous[1];
    if (currentOverlapPrevious) {
      // replace current and previous with the merged interval
      allIntervals[i] = [previous[0], Math.max(current[1], previous[1])];
      allIntervals.splice(i - 1, 1);
      i -= 1;
    }
  }

  // collect free times
  for (let i = 1; i < allIntervals.length; i += 1) {
    freeTimes.push([allIntervals[i - 1][1], allIntervals[i][0]]);
  }
  return freeTimes;
};

//try
console.log(
  findFreeCommonIntervals([
    [
      [1, 3],
      [9, 12],
    ],
    [[2, 4]],
    [[6, 8]],
  ]),
  "expect____"
);

"use strict";
/**
 * We are given a list of jobs. Each job has a startTime,
 *  an endTime, and a CPU load when it is running.
 * Our goal is to find the Maximum CPU Load at any time
 * if all the jobs are running on the same machine.
 * @param{array} -list of arrays containing start, end and cpu load
 *@returns{number} - the maximum cpu load
 */

const findMaxCpuLoad = (list) => {
  // make sure input is an array that contains at least one element
  if (!Array.isArray(list) || list.length < 1) {
    throw new Error("param must be an array");
  }

  // make sure each array contains 3 integers
  for (const array of list) {
    if (!Array.isArray(array) || array.length !== 3) {
      throw new Error("each element of the list must be an array of length 3 ");
    }

    array.forEach((value) => {
      if (!Number.isInteger(value)) {
        throw new Error("each value must be a number");
      }
    });
  }

  // special case (one array)
  if (list.length === 1) return list[0][2];

  // first sort list
  list.sort((a, b) => a[0] - b[0]);
  // store the max value
  let maxCpuLoad = 0;
  for (let i = 1; i < list.length; i += 1) {
    const [previous, current] = [list[i - 1], list[i]];
    const currentOverlapPrevious = current[0] < previous[1];
    if (currentOverlapPrevious) {
      // upadate current and remove previous
      list[i] = [
        previous[0],
        Math.max(previous[1], current[1]),
        previous[2] + current[2],
      ];
      list.splice(i - 1, 1);
      i -= 1;
    }
  }
  // get the max
  for (let i = 0; i < list.length; i += 1) {
    maxCpuLoad = Math.max(maxCpuLoad, list[i][2]);
  }
  return maxCpuLoad;
};

// try

console.log(
  findMaxCpuLoad([
    [2, 7, 9],
    [1, 4, 10],
    [8, 13, 15],
  ]),
  "expect_______19"
);

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
  // make sure input is an array
  if (!Array.isArray(list)) {
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
};

// try

console.log(
  findMaxCpuLoad([
    [1, 4, 3],
    [2, 5, 4],
    [7, 8, 6],
  ])
);

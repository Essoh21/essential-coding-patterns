"use strict";
/*
Given two lists of intervals, find the intersection of 
these two lists. Each list
 consists of disjoint intervals sorted on their startTime.
*/

const findIntersection = (list1, list2) => {
  // make sure two list are list of intervals
  if (!Array.isArray(list1) || !Array.isArray(list2)) {
    throw "lists must be lists of intervals";
  }

  for (const interval of list1) {
    if (!Array.isArray(interval) || !(interval.length === 2)) {
      throw "each element of the list must be an interval";
    }
  }

  for (const interval of list2) {
    if (!Array.isArray(interval) || !(interval.length === 2)) {
      throw "each element of the list must be an interval";
    }
  }

  const intersection = [];
  let i = 0,
    j = 0;

  while (i < list1.length && j < list2.length) {
    //check which list overlap other
    const firstOverlapsSecond =
      list1[i][0] >= list2[j][0] && list1[i][0] <= list2[j][1];
    const secondOverlapsFirst =
      list2[j][0] >= list1[i][0] && list2[j][0] <= list1[i][1];
    // store the intersection
    if (firstOverlapsSecond || secondOverlapsFirst) {
      intersection.push([
        Math.max(list1[i][0], list2[j][0]),
        Math.min(list1[i][1], list2[j][1]),
      ]);
    }
    // move next for the interval that is the first to finish.

    list1[i][1] < list2[j][1] ? (i += 1) : (j += 1);
  }
  return intersection;
};

// try

console.log(
  findIntersection(
    [
      [0, 3],
      [5, 6],
      [8, 9],
    ],
    [
      [2, 3],
      [4, 7, 5],
    ]
  ),
  "_____expect  [2, 3], [5, 6]"
);

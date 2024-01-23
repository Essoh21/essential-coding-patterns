"use strict";
import NumberStream from "./NumberStream.js";

/**
 * Given an array of numbers and a number k, find the median
 * of all the k sized sub-arrays (or windows) of the array.
 * @param {number[]} list - array of numbers
 * @param {number} k - window size
 * @returns {number[]} medians - medians of all k sized windows
 */

export default function getMedianOfAllKSizedWindows(list, k) {
  if (!Array.isArray(list)) throw new Error("list must be an array");
  const medians = [];
  //use windows sliding approach to get windows
  let [start, end] = [0, k];
  while (end <= list.length) {
    const currentWindow = list.slice(start, end);
    const currentNumberStream = new NumberStream();
    for (let i = 0; i < currentWindow.length; i += 1) {
      currentNumberStream.insertNumber(currentWindow[i]);
    }

    medians.push(currentNumberStream.findMedian());
    start += 1;
    end = start + k;
    console.log(start, end + "  start end ");
  }
  return medians;
}

//console.log(getMedianOfAllKSizedWindows([1, 2, -1, 3, 5], 3));

//time complexity o(N*k*log(N)) N is list length
// space complexity o(k)

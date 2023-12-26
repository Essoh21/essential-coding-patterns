"use strict";

/**
 * Given an array of intervals representing N appointments,
 * find out if a person can attend all the appointments.
 * @param {Array} listOfIntervals - An array of intervals.
 * @returns {boolean} - True if the person can attend all appointments, false otherwise.
 */
const findIfPersonCanAttendAllAppointments = (listOfIntervals) => {
  //Make sure the fuction receive an array of intervals
  if (!Array.isArray(listOfIntervals)) {
    throw "param must be an array of intervals";
  }
  for (const interval of listOfIntervals) {
    if (!Array.isArray(interval) || interval.length !== 2) {
      throw "each element of the list must be an interval";
    }
  }
  //sort the list and return false if two of the intervals overlaps

  const sortedList = listOfIntervals.sort((a, b) => a[0] - b[0]);
  let canAttendAllAppointtments = true;
  for (let i = 1; i < sortedList.length; i += 1) {
    const [previousInterval, currentInterval] = [
      sortedList[i - 1],
      sortedList[i],
    ];
    const currentOverlapsPrevious =
      currentInterval[0] >= previousInterval[0] &&
      currentInterval[0] <= previousInterval[1];

    if (currentOverlapsPrevious) {
      canAttendAllAppointtments = false;
    }
  }

  return canAttendAllAppointtments;
};

// test
console.log(
  findIfPersonCanAttendAllAppointments([
    [1, 3],
    [4, 5],
    [7, 9],
  ]),
  "________expect true"
);

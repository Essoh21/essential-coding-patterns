"use strict";

/**
 * Given a list of intervals representing the
 * start and endTime ofN meetings, find the
 *  minimum number of rooms required to hold all
 *  the meetings.
 * @param{Array} list of intervals
 * @returns{number} the minimum number of rooms required to hold all the meetings
 */

const findMinNumberOfRooms = (listOfIntervals) => {
  if (!Array.isArray(listOfIntervals)) {
    throw new Error("param must be an array");
  }
  for (const interval of listOfIntervals) {
    if (!Array.isArray(interval) || interval.length !== 2) {
      throw new Error("param must be a list or intervals");
    }
  }
  if (listOfIntervals.length <= 1) return listOfIntervals.length; // special case
  // sort listOfIntervals on starting time
  listOfIntervals.sort((a, b) => a[0] - b[0]);
  const rooms = [listOfIntervals[0]];

  // loop over intervalls and create a new room only when intervals overlap curr room

  for (let i = 1; i < listOfIntervals.length; i += 1) {
    const latestRoom = rooms.sort((a, b) => a[1] - b[1])[0]; // get the room that finish first
    const currentIntervalStartAfterLatestRoomEnd =
      listOfIntervals[i][0] >= latestRoom[1];
    if (currentIntervalStartAfterLatestRoomEnd) {
      // continue using the latestRoom
      latestRoom[1] = listOfIntervals[i][1];
    } else {
      //create new room
      rooms.push(listOfIntervals[i]);
    }
  }
  return rooms.length;
};

// try
console.log(
  findMinNumberOfRooms([
    [6, 7],
    [2, 4],
    [8, 12],
  ]),
  "_________expect 1"
);

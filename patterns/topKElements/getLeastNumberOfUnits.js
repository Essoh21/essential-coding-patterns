"use strict";

/*
Given a characters array tasks, representing
 the tasks a CPU needs to do, where each letter
  represents a different task. Tasks could be
   done in any order. Each task is done in one unit 
   of time. For each unit of time, the CPU could 
   complete either one task or just be idle.

However, there is a non-negative integer n
 that represents the cooldown period between 
 two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

Return the least number of units of 
times that the CPU will take to finish all
 the given tasks.
 src: https://leetcode.com/problems/task-scheduler/description/
*/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @returns {number}
 */

const getLeastNumberOfUnits = (tasks, n) => {
  if (!Array.isArray(tasks) || !n) throw new Error("invalid inputs");
  const taskFreq = new Array(26).fill(0);
  for (const task of tasks) {
    const index = task.charCodeAt(0) - "A".charCodeAt(0);
    taskFreq[index]++;
  }

  // Sort tasks based on frequency
  taskFreq.sort((a, b) => b - a);

  // Find the maximum frequency
  const maxFreq = taskFreq[0];

  // Calculate the number of idle slots
  let idleSlots = (maxFreq - 1) * n;

  // Traverse tasks and fill in idle slots
  for (let i = 1; i < taskFreq.length && idleSlots > 0; i++) {
    idleSlots -= Math.min(taskFreq[i], maxFreq - 1);
  }

  idleSlots = Math.max(0, idleSlots);

  // The least number of units of time is the total number of tasks plus idle slots
  return tasks.length + idleSlots;
};

console.log(
  getLeastNumberOfUnits(
    ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"],
    2
  )
);

//time complexity o(n)

//space complexity o(1)

/*
Problem: Given an array, find the average of each subarray of ‘K’ contiguous elements in it.

*/

const findAverageOfKContigElements = (list, k) => {
  if (!Array.isArray(list)) throw new Error("list must be an array");
  const result = [];
  let currentSum = 0;
  let [left, right] = [0, 0];
  while (right <= list.length - 1) {
    // sum list values from left position to right position

    currentSum += list[right];
    // if right - left is K the add average to result and move left and right
    const windowSize = right - left + 1;
    if (windowSize === k) {
      const currentAverage = currentSum / k;

      result.push(currentAverage);
      currentSum -= list[left];

      left += 1;
    }
    right += 1;
  }
  return result;
};

console.log(findAverageOfKContigElements([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));

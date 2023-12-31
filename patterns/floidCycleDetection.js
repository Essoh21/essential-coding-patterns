"use strict";
/*  
Given an array, nums containing n + 1 integers where each 
integer is between 
1 and n (inclusive), prove that at least one 
duplicate number must exist. Assume that there 
is only one duplicate number, find the duplicate one.
Note:
You must not modify the array (assume the array 
    is read-only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n^2).
There is only one duplicate number in the array,
 but it could be repeated more than once.
*/

const findDuplicateNumber = (list) => {
  // use tortoise and hare algorithme.
  let [slowPointer, fastPointer] = [list[0], list[list[0]]];
  while (slowPointer !== fastPointer) {
    slowPointer = list[slowPointer];
    fastPointer = list[list[fastPointer]];
  }
  fastPointer = 0;
  // slowdown fastPointer
  while (slowPointer !== fastPointer) {
    slowPointer = list[slowPointer];
    fastPointer = list[fastPointer];
  }
  return slowPointer;
};

console.log(findDuplicateNumber([1, 3, 4, 2, 2]), "first___________");
console.log(findDuplicateNumber([3, 1, 3, 4, 2]), "second__________________");

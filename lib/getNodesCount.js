"use strict";
import isObject from "./isObject.js";
/**
 * take a linked list and returns nodes count
 * @param{object} - linked list head
 * @return {number} - number of nodes in the linked list
 */

export default function getNodesCount(head) {
  if (!isObject(head)) {
    throw new Error("head must be a linked list head");
  }
  let [temp, count] = [head, 0];
  while (temp !== null) {
    count += 1;
    temp = temp.next;
  }
  return count;
}

"use strict";
import isObject from "../../lib/isObject.js";
import reverseFromPtoQ from "./reversefromPtoQ.js";
import getNodesCount from "../../lib/getNodesCount.js";
/**
 * Given the head of a LinkedList and a number ‘k’,
 * reverse every ‘k’ sized sub-list starting from
 * the head. If, in the end, you are left with
 * a sub-list with less than ‘k’ elements, reverse it too.
 * @param{Object} -head of LinkedList
 * @param{integer} -k sublist size to reverse
 * @returns{Object} -head rersed sublist ;
 */

const reverseEveryKSublist = (head, k) => {
  // Make sure head is an object and k> 1
  if (!isObject(head) || k < 1) {
    throw new Error("head must be an Object not null and not array and k >= 1");
  }
  // get head length
  const headLength = getNodesCount(head);
  // special case
  if (k === 1) return head;

  // start from one and reverse every k length sublist
  let p = 1;
  const numberOfKSubList = Math.trunc(headLength / k);
  const restOfNodesBeyond = headLength % k;
  while (p + k - 1 <= numberOfKSubList * k) {
    head = reverseFromPtoQ(head, p, p + k - 1);
    p += k;
  }
  if (restOfNodesBeyond !== 0) {
    head = reverseFromPtoQ(head, p, p + restOfNodesBeyond);
  }

  return head;
};

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  printList() {
    let output = "";
    let currentNode = this; // point to the head
    while (currentNode !== null) {
      output += currentNode.value + " ---> ";
      currentNode = currentNode.next;
    }
    return output;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
console.log(reverseEveryKSublist(head, 2).printList(), "reversed");

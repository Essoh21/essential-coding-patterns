"use strict";
import isObject from "../../lib/isObject.js";
import reverseFromPtoQ from "./reversefromPtoQ.js";
import getNodesCount from "../../lib/getNodesCount.js";

/**
 *Given the head of a LinkedList and a number K, 
 reverse every alternating K sized sub-list starting 
 from the head.

If, in the end, you are left with a sub-list
 with less than K elements, reverse it too. 
 * @param{object} -linked list head
 * @param{integer} -k sublist length
 * @returns{object} - reversed linked list 
 */
export default function reverseAlternatingKElSublist(head, k) {
  if (!isObject(head) || k < 1) {
    throw new Error("head must be a linked list head and k >= 1");
  }
  if (k === 1) return head;

  const n = getNodesCount(head);
  const numberOfKLengthSublists = Math.trunc(n / k);
  const restOfNodesBeyond = n % k;
  let sublistNumber = 1;
  let p = 1;

  if (k > n) {
    throw new Error("k must be less than your linked list length:  " + n);
  }
  // reverse every sublist where sublistNumber is even
  while (p + k - 1 <= numberOfKLengthSublists * k) {
    const isSublistNumberEven = sublistNumber % 2 === 0;
    if (isSublistNumberEven) {
      head = reverseFromPtoQ(head, p, p + k - 1);
    }
    sublistNumber += 1;
    p += k;
  }

  if (restOfNodesBeyond !== 0 && sublistNumber % 2 === 0) {
    console.log("inside");
    head = reverseFromPtoQ(head, p, p + restOfNodesBeyond);
  }
  return head;
}

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
head.next.next.next.next.next.next.next.next = new Node(9);
head.next.next.next.next.next.next.next.next.next = new Node(10);
head.next.next.next.next.next.next.next.next.next.next = new Node(11);
console.log(reverseAlternatingKElSublist(head, 4).printList(), "reversed");

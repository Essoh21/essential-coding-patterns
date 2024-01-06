"use strict";
import getNodesCount from "../../lib/getNodesCount.js";

/**
 * Rotates the given linked list to the right by K nodes.
 * @param {object} head - Head of the linked list.
 * @param {number} k - Number of nodes to rotate by.
 * @return {object} - Rotated linked list.
 */
export default function rotateToRightByKNodes(head, k) {
  if (!head || !head.next || k < 1) {
    throw new Error(
      "Invalid input. Ensure head is not null, head.next is not null, and k is greater than 0."
    );
  }

  const totalNodes = getNodesCount(head);
  if (k > totalNodes) {
    throw new Error(
      "Invalid value of k. It should be less than or equal to the number of nodes."
    );
  }

  let tail = null;
  let newHead = head;

  // Find the new head and tail
  for (let i = 1; i <= totalNodes - k; i += 1) {
    tail = newHead;
    newHead = newHead.next;
  }

  // Rotate the linked list
  tail.next = null;
  const storedHead = head;

  // Connect the rotated part to the original head
  let originalLinkedListTail = newHead;
  for (let i = 1; i < k; i += 1) {
    originalLinkedListTail = originalLinkedListTail.next;
  }
  originalLinkedListTail.next = storedHead;

  return newHead;
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
console.log(head.printList(), "original");

console.log(rotateToRightByKNodes(head, 2).printList(), "reversed");

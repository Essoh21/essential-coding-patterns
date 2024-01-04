"use strict";
/**
 * Given the head of a LinkedList and two positions p and q,
 * reverse the LinkedList from position p to q.
 * @param{class} linked list head
 * @param{integer} -start point of reverse
 * @param {integer} -end point of reverse
 * @returns{class} - partial reversed linkedList
 *
 */

const reverseFromPtoQ = (head, p, q) => {
  // Check for invalid indices
  if (p < 1 || q < p) {
    throw new Error("Invalid indices");
  }

  // If p and q are the same, or the linked list is empty, no need to reverse
  if (p === q || !head) {
    return head;
  }

  let current = head;
  let previous = null;
  let next = null;

  // Move to the node at position (p - 1) to set up for reversing
  for (let i = 1; i < p && current; i++) {
    previous = current;
    current = current.next;
  }

  // 'start' is the node before position p, 'tail' is the node at position p
  const start = previous;
  let tail = current;

  // Reverse the linked list from position p to q
  for (let i = p; i <= q && current; i++) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  // If start is not null, update its 'next' to point to the reversed section
  // Otherwise, update the head of the linked list
  if (start) {
    start.next = previous;
  } else {
    head = previous;
  }

  // Connect the tail of the reversed section to the node at position (q + 1)
  tail.next = current;

  // Return the head of the modified linked list
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
console.log(head.printList(), "original");
console.log(reverseFromPtoQ(head, 4, 5).printList(), "reversed");

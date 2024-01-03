"use strict";

/**
 * Given the head of a Singly LinkedList,
 * reverse the LinkedList. Write a function
 * to return the new head of the reversed LinkedList.
 * @param{class} -linked list
 * @returns{class}  -reversed linked list
 */

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

function reverseList(head) {
  let current = head;
  let previous = null;

  while (current !== null) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
}

// example list
const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

console.log(head.printList(), "original ");
console.log(reverseList(head).printList(), "reversed s");

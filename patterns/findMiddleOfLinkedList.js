"use strict";

/* 

Given the head of a Singly LinkedList, 
write a method to return the middle node of the LinkedList.
*/

const findMiddleOfLinkedList = (linkedList) => {
  let [slow, fast] = [linkedList, linkedList];
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};
// let test it
const Node = class {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
};

const head = new Node(1);

head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);

console.log(`Middle Node: ${findMiddleOfLinkedList(head).value}`);

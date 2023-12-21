"use strict";
const findStartingNodeOfCycleOfLinkedList = (linkedList) => {
  // first check cycle and find cycle length

  let [slow, fast] = [linkedList, linkedList];
  let cycleLength = 0;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      cycleLength = findCycleLength(slow);
      break;
    }
  }

  return getStartNodeOfCycleOfLength(head, cycleLength);
};

const findCycleLength = (slow) => {
  let lenght = 0;
  let currentNode = slow;
  while (true) {
    currentNode = currentNode.next;
    lenght += 1;
    if (currentNode === slow) {
      break;
    }
  }
  return lenght;
};

const getStartNodeOfCycleOfLength = (head, cycleLength) => {
  let [start, end] = [head, head];
  while (cycleLength > 0) {
    end = end.next;
    cycleLength -= 1;
  }
  // move both of them
  while (start !== end) {
    start = start.next;
    end = end.next;
  }
  // if start  == end then start is the cycle starting node
  return start;
};

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
head.next.next.next.next.next.next = head.next.next;
console.log(
  `LinkedList cycle start: ${findStartingNodeOfCycleOfLinkedList(head).value}`
);

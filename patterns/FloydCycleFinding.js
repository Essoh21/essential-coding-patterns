"use strict";

/*  

Given the head of a 
LinkedList with a cycle, find the length of the cycle.

*/

const findLengthOfLinkedListCycle = (head) => {
  let [slow, fast] = [head, head];
  // check for the cycle presence
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      // cycle is found
      return calculateCycleLength(slow);
    }
  }
  return 0;
};

const calculateCycleLength = (slow) => {
  let current = slow;
  // from slow position  to slow position gives the length of the cycle
  let cylcleLength = 0;
  while (true) {
    current = current.next;
    cylcleLength += 1; //increase node count
    if (current === slow) {
      break;
    }
  }
  return cylcleLength;
};

// try and see
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

console.log(head, "head___________");
console.log(findLengthOfLinkedListCycle(head, "_____lenght of ll"));

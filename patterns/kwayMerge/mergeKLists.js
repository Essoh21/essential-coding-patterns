"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const mergeKList = (list) => {
  if (!Array.isArray(list) || list.length < 1) return null;

  // create a queue of all linkedlists from list
  const queue = [];
  for (const node of list) {
    if (node) {
      queue.push(node);
    }
  }
  if (!queue) return null;

  // sort queue node in ascending value order(min heap)
  queue.sort((a, b) => a.value - b.value);
  const orderedLinkedList = new Node(Number.NEGATIVE_INFINITY);
  let currentNode = orderedLinkedList;
  while (queue.length > 0) {
    const minNode = queue.shift();
    currentNode.next = minNode;
    currentNode = currentNode.next;

    if (minNode.next) {
      queue.push(minNode.next);
    }
    queue.sort((a, b) => a.value - b.value);
  }
  return orderedLinkedList.next;
};

/* const firstLinkedList = new Node(1);
firstLinkedList.next = new Node(4);
firstLinkedList.next.next = new Node(5);

const secondLinkedList = new Node(1);
secondLinkedList.next = new Node(3);
secondLinkedList.next.next = new Node(4);

const thirdLinkedList = new Node(2);
thirdLinkedList.next = new Node(6);
//thirdLinkedList.next.next = new Node(5);
//[[1,4,5],[1,3,4],[2,6]]

//let merged = mergeKList([firstLinkedList, secondLinkedList, thirdLinkedList]);
let merged = mergeKList([null]);
let result = "";
while (merged) {
  result += "->" + merged.value;
  merged = merged.next;
}
console.log(result);
 */

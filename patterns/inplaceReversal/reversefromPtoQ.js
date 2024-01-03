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
  let current = head;
  const [start, end] = [p, q];

  if (start === end) return head;
  if (p > q) throw new Error("must p <= q");
  // get the head(node) at position p-1;
  let nodesCount = 1;
  let startHead = head;
  while (nodesCount < p && startHead.next !== null) {
    startHead = startHead.next;
    nodesCount += 1;
  }

  // find node at position q
  let endHead = startHead;

  while (nodesCount < q) {
    endHead = endHead.next;
    nodesCount += 1;
  }

  // reverse nodes between p and q
  let subCurrent = startHead;

  let previous = endHead;

  let j = 1;
  const numberOfNodeBetweenQAndP = q - p + 1;

  while (j < numberOfNodeBetweenQAndP) {
    const next = subCurrent.next;
    subCurrent.next = previous;
    previous = subCurrent;
    subCurrent = next;
    j += 1;
    console.log(j + "  this part ", previous.printList());
  }
  console.log(j);
  //console.log(previous.printList(), "previous");
  // join the reversed part  to original linked list
  const reverse = startHead;
  reverse.next = previous;

  // return the linked list
  return reverse;
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
console.log(reverseFromPtoQ(head, 2, 4).printList(), "reversed");

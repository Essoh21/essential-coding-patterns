"use strict";

/**
 * Custom js Heap
 *
 */
export default class Heap {
  constructor(compareFn = (a, b) => a < b) {
    // Min-heap by default
    this.data = [];
    this.compare = compareFn;
  }

  insert(value) {
    this.data.push(value);
    this.heapifyUp();
  }

  remove() {
    if (this.data.length === 0) return null;
    const removed = this.data[0];
    this.data[0] = this.data.pop();
    this.heapifyDown();
    return removed;
  }

  peek() {
    return this.data[0];
  }

  heapifyUp() {
    let index = this.data.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.compare(this.data[index], this.data[parentIndex])) {
        [this.data[index], this.data[parentIndex]] = [
          this.data[parentIndex],
          this.data[index],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let index = 0;
    while (true) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      let smallerIndex = leftIndex;
      if (
        rightIndex < this.data.length &&
        this.compare(this.data[rightIndex], this.data[leftIndex])
      ) {
        smallerIndex = rightIndex;
      }
      if (
        smallerIndex < this.data.length &&
        this.compare(this.data[smallerIndex], this.data[index])
      ) {
        [this.data[index], this.data[smallerIndex]] = [
          this.data[smallerIndex],
          this.data[index],
        ];
        index = smallerIndex;
      } else {
        break;
      }
    }
  }
}

/* const maxHeap = new Heap((a, b) => a > b);
maxHeap.insert(10);
maxHeap.insert(11);
maxHeap.insert(3);
maxHeap.insert(7);
maxHeap.insert(2);

console.log(maxHeap.peek());
console.log(maxHeap.data); // Output: 3
maxHeap.remove();
console.log(maxHeap.data);
maxHeap.remove();
console.log(maxHeap.data);
maxHeap.remove();
console.log(maxHeap.data);
 */

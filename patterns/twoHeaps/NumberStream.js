"use strict";
import Heap from "../../lib/Heap.js";

/**
 * Represents a number stream
 * should have a method insertNumber
 * should have a method findMedian
 * @class NumberStream
 * @contructor
 *
 */

export default class NumberStream {
  constructor() {
    this.maxHeap = new Heap((a, b) => a > b);
    this.minHeap = new Heap((a, b) => a < b);
  }

  insertNumber(number) {
    const isMaxHeapEmptyOrNumberLessThanMaxHeapRoot =
      this.maxHeap.data.length === 0 || number < this.maxHeap.peek();
    if (isMaxHeapEmptyOrNumberLessThanMaxHeapRoot) {
      this.maxHeap.insert(number);
    } else {
      this.minHeap.insert(number);
    }
    /* make sure max and min heaps have equal number of elements 
    or maxHeap has only one plus */

    const hasMaxHeapMoreThanOnePlusElements =
      this.maxHeap.data.length > this.minHeap.data.length + 1;
    const hasMaxHeapLessElementsThanMinHeap =
      this.maxHeap.data.length < this.minHeap.data.length;

    if (hasMaxHeapMoreThanOnePlusElements) {
      this.minHeap.insert(this.maxHeap.remove());
    } else if (hasMaxHeapLessElementsThanMinHeap) {
      this.maxHeap.insert(this.minHeap.remove());
    }
  }

  //add clear  function for further usage of the module
  clear() {
    this.minHeap.data = [];
    this.maxHeap.data = [];
  }

  // add hability to print min and max heap for further usage of the module
  getMinHeapData() {
    return this.minHeap.data;
  }
  getMaxHeapData() {
    return this.maxHeap.data;
  }
  findMedian() {
    if (this.maxHeap.data.length > this.minHeap.data.length) {
      return this.maxHeap.peek();
    } else if (this.minHeap.data.length > this.maxHeap.data.length) {
      return this.minHeap.peek();
    } else {
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2.0;
    }
  }
}

// const NewNumberStream = new NumberStream();

// NewNumberStream.insertNumber(3);
// NewNumberStream.insertNumber(1);

// console.log(`The median is: ${NewNumberStream.findMedian()}`); //2
// NewNumberStream.insertNumber(5);
// console.log(`The median is: ${NewNumberStream.findMedian()}`); //3
// NewNumberStream.insertNumber(4);
// console.log(`The median is: ${NewNumberStream.findMedian()}`); //3.5

// time complexity of insert number (o(logn)) and fro findMedian(o(n))
// space complexity is determined by two heaps and is o(n)

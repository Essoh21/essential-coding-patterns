"use strict";
/**
 *
 * @returns{object} -Queue constructor
 *
 */

export default class Queue {
  constructor() {
    this.data = [];
  }
  addFront(element) {
    /**
     * add an element to the postion 0 in queue array
     *
     */
    this.data.unshift(element);
  }

  removeFront() {
    /**
     * remove the element at position 0 in queue and returns that element
     */
    if (this.isEmpty()) return null;
    return this.data.shift();
  }

  addTail(element) {
    /**
     * add an element as last element of the que array
     */
    this.data.push(element);
  }

  removeTail() {
    /**
     * remove the element at position lenght -1 and return it
     */
    if (this.isEmpty()) return null;
    this.data.pop();
  }

  isEmpty() {
    /**
     * check if the queue array is of lenght 0
     */
    return this.data.length === 0;
  }
  front() {
    /**
     * return the element at postion 0 in the queue array
     * @returns {any} element at position 0
     */
    return this.data[0];
  }

  tail() {
    /**
     * returns the element at position length-1 from queue array
     * @returns {any} element at position length - 1
     */
    this.data[-1];
  }
  length() {
    /**
     * returns the number of elements in the queue array
     * @returns {number} the number of elements in the array
     */
    return this.data.length;
  }
}

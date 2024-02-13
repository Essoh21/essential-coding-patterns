"use strict";
/*

Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.

Implement the FreqStack class:

FreqStack() constructs an empty frequency stack.
void push(int val) pushes an integer val onto the top of the stack.
int pop() removes and returns the most frequent element in the stack.
If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.
*/

class MaxFreqStack {
  constructor() {
    this.stack = [];
    this.freqMap = new Map();
  }

  push(val) {
    this.stack.push(val);
    this.freqMap.set(val, (this.freqMap.get(val) || 0) + 1);
  }
  pop() {
    // get the most frequent element and its frequency
    let [mostFreq, maxFrequency] = [null, -Infinity];
    for (const [val, n] of this.freqMap) {
      if (n >= maxFrequency) {
        mostFreq = val;
        maxFrequency = n;
      }
    }
    // get the last index of the most frequent element
    const index = this.stack.lastIndexOf(mostFreq);

    // remove the most frequent and update freqMap
    this.stack.splice(index, 1);
    this.freqMap.set(mostFreq, maxFrequency - 1);
    // remove the element from freqMap if frequency become 0
    if (maxFrequency - 1 === 0) this.freqMap.delete(mostFreq);
    // return poped value
    return mostFreq;
  }
}

/* const fStack = new MaxFreqStack();
fStack.push(5);
fStack.push(8);
fStack.push(5);
fStack.push(7);
fStack.push(7);
fStack.push(5);
fStack.pop();
fStack.pop();
fStack.pop();
fStack.pop();

console.log(fStack.stack, "expect [5, 8]"); */
// o(n) time and space complexity. n is the number of uniq elements in the stack

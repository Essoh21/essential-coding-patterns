"use strict";

import TreeNode from "../../lib/TreeNode.js";

/**
 * Find the largest value on each level of a binary tree.
 * @param {Object} binary tree root node
 * @returns {number[]} list of averages on each level of the tree
 *
 */

export default function findMaxOnEachLevel(treeRootNode) {
  const result = [];
  if (!treeRootNode) return result;
  const queue = [treeRootNode];
  // get Max val of each level
  while (queue.length > 0) {
    const levelLength = queue.length;
    let levelMax = -1;
    for (let i = 0; i < levelLength; i += 1) {
      const currentNode = queue.shift();
      levelMax = Math.max(levelMax, Number(currentNode.value));
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    result.push(levelMax);
  }
  return result;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Max value's for each level are: ${findMaxOnEachLevel(root)}`);

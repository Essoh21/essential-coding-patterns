"use strict";
import TreeNode from "../../lib/TreeNode.js";

/**
 * Given a binary tree, find its maximum depth (or height)
 * @param {Object} -binary tree root node
 * @returns {number} the max depth of the tree
 */

export default function findMaxDepth(treeRootNode) {
  let maxDepth = 0;
  if (!treeRootNode) return maxDepth;
  const queue = [treeRootNode];
  // traverse the tree level by level and track depth until the final level
  while (queue.length > 0) {
    maxDepth += 1;
    const levelLength = queue.length;
    for (let i = 0; i < levelLength; i += 1) {
      const currentNode = queue.shift();
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }
  // return the depth
  return maxDepth;
}

/* const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Maximum Depth: ${findMaxDepth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Maximum Depth: ${findMaxDepth(root)}`);
 */

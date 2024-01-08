"use strict";
import TreeNode from "../../lib/TreeNode.js";
/**
 * given a binary tree, Find the minimum depth
 * of a binary tree. The minimum depth is the
 *  number of nodes along the shortest path from the root node
 * to the nearest leaf node.
 * @param {Object} binary tree root node
 * @returns {number} the minimum depth of the tree;
 *
 */

export default function findMinDepth(treeRootNode) {
  let minDepth = 0;
  if (!treeRootNode) return 0;

  const queue = [treeRootNode];
  // push each level node into a queue, track depth and traverse the queue
  while (queue.length > 0) {
    minDepth += 1;
    const levelLength = queue.length;
    for (let i = 0; i < levelLength; i += 1) {
      const currentNode = queue.shift();
      const currentHasLeafNode =
        currentNode.left === null || currentNode.right === null;
      if (currentHasLeafNode) {
        return minDepth;
      }
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }
}

/* const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Min depth of the three: ${findMinDepth(root)}`);
 */

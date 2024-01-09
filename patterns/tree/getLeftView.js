"use strict";
import TreeNode from "../../lib/TreeNode.js";
/**
 * Given a binary tree, return an array containing
 *  nodes in its left view. The left view of a binary
 *  tree is the set of nodes visible when the tree
 * is seen from the left side.
 * @param {Object} binary tree root node
 * @returns {Array} list of left view nodes
 */

export default function getLeftView(treeRootNode) {
  if (!treeRootNode) return [];
  const leftView = [];
  const queue = [treeRootNode];

  while (queue.length > 0) {
    const levelLength = queue.length;
    for (let i = 0; i < levelLength; i += 1) {
      const currentNode = queue.shift();
      if (i === 0) {
        leftView.push(currentNode.value);
      }
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }
  return leftView;
}

/* const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(getLeftView(root));

//o(n) space and time
 */

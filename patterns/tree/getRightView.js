"use strict";
import TreeNode from "../../lib/TreeNode.js";

/**
 * Given a binary tree, return an array
 *  containing nodes in its right view.
 * The right view of a binary tree is the set
 * of nodes visible when the
 * tree is seen from the right side.
 * @param {Object} binary tree root node
 * @returns {Array} binary right view Nodes
 */

export default function getRightView(treeRootNode) {
  if (!treeRootNode) return [];

  const queue = [treeRootNode];
  const rightNodes = [];
  // traverse the tree and save the right node of each level
  while (queue.length > 0) {
    const levelLength = queue.length;
    for (let i = 0; i < levelLength; i += 1) {
      const currentNode = queue.shift();
      if (i === levelLength - 1) {
        rightNodes.push(currentNode.value);
      }

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }
  return rightNodes;
}

/* const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(getRightView(root));

//o(n) space and time
 */

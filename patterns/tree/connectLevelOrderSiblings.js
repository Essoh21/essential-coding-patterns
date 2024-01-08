"use strict";
import TreeNode from "../../lib/TreeNode.js";
/**
 *
 * Given a binary tree, connect each node with
 * its level order successor. The last node of each
 *  level should point to a null node.
 * @param {Object} binary tree root node
 * @returns {Object} tree root node with connections
 */

export default function connectLevelOrderSiblings(treeRootNode) {
  const queue = [treeRootNode];

  // traverse all levels and connect each node to its levelorder successor
  while (queue.length > 0) {
    const levelLength = queue.length;
    let previouNode = null;
    for (let i = 0; i < levelLength; i += 1) {
      const currentNode = queue.shift();
      currentNode.next = null;
      if (previouNode !== null) {
        previouNode.next = currentNode;
      }
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      previouNode = currentNode;
    }
  }
  return treeRootNode;
}

/* const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(connectLevelOrderSiblings(root).left.next.left.value, "expect 10");
 */

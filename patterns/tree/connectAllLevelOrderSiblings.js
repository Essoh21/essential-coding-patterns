"use strict";
import TreeNode from "../../lib/TreeNode.js";

/**
 *Given a binary tree, connect each node with
 * its level order successor. The last node of
 * each level should point to the first node of
 *  the next level
 *@param {Object} binary tree root Node
 *@returns {Object} binary tree root node with nodes connected
 */

export default function connectAllLevelOrderSiblings(treeRootNode) {
  if (!treeRootNode) return null;
  const queue = [treeRootNode];
  // traverse the tree and connect nodes
  let previouNode = null;
  while (queue.length > 0) {
    const levelLength = queue.length;
    for (let i = 0; i < levelLength; i += 1) {
      const currentNode = queue.shift();
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

console.log(connectAllLevelOrderSiblings(root).right.next.value, "expect 9");
 */

"use strict";
import TreeNode from "../../lib/TreeNode.js";

/**
 * Given a binary tree and a node, find the level order
 * successor of the given node in the tree. The level order
 *  successor is the node that appears right after the given
 * node in the level order traversal.
 * @param {Object} binary tree root node
 * @param {Object} node to find level order successor of
 * @returns {Object} level order successor
 */

export default function findLevelOrderSuccessor(treeRootNode, givenNode) {
  if (!treeRootNode || !givenNode) return null;
  const queue = [treeRootNode];
  //traverse the tree, queue nodes  and find givenNode

  while (queue.length > 0) {
    const levelLength = queue.length;
    for (let i = 0; i < levelLength; i += 1) {
      const currentNode = queue.shift();

      const isCurrentNodeTheGivenNode = currentNode.value === givenNode.value;
      if (isCurrentNodeTheGivenNode && queue.length > 0) {
        return queue.shift();
      }
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  // return node right of givenNode
  return null;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

//console.log(findLevelOrderSuccessor(root, new TreeNode(7)));
let result = findLevelOrderSuccessor(root, new TreeNode(7));
if (result !== null) console.log(result.value, "first");

result = findLevelOrderSuccessor(root, new TreeNode(9));
if (result !== null) console.log(result.value, "second");

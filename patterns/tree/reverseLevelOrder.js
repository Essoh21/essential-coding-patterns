"use strict";
import TreeNode from "../../lib/TreeNode.js";
/**
 * Given a binary tree, it  populate an array to represent
 *  its level-by-level traversal in reverse order,
 *  i.e., the lowest level comes first.
 * it  populate the values of all nodes in each
 * level from left to right in separate sub-arrays.
 * @param {object} binary tree root node
 * @returns {array} reversed binary tree levels values
 */
export default function reverseLevelOrder(binaryTreeRoot) {
  const result = [];
  if (!binaryTreeRoot) return result;
  const queue = [binaryTreeRoot];

  while (queue.length > 0) {
    const levelLength = queue.length;
    const currentLevel = [];
    for (let i = 0; i < levelLength; i += 1) {
      const currentNode = queue.shift();
      if (currentNode.value === undefined) {
        throw new Error("each node of the three must have a value");
      }
      currentLevel.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    result.unshift(currentLevel);
  }
  return result;
}

const root = new TreeNode("a");
root.left = new TreeNode("b", new TreeNode("d"), new TreeNode("e"));
root.right = new TreeNode("c");

const result = reverseLevelOrder(root);
console.log(result);

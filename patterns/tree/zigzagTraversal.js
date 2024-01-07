"use strict";
import TreeNode from "../../lib/TreeNode.js";
/**
 * Given a binary tree,it  populate an array to represent
 *  its zigzag level order traversal. it populate
 *  the values of all nodes of the first level from left to
 *  right, then right to left for the next level and keep
 *  alternating in the same manner for the following levels.
 * @param {object} binary tree root node
 * @returns {Array} level order traversal values with left- right and right to left alternation
 *
 */

export default function zigzagTraversal(binaryTreeRoot) {
  const result = [];
  if (!binaryTreeRoot) return result;
  let traversalOrder = 1;
  const queue = [binaryTreeRoot];
  while (queue.length > 0) {
    const levelLength = queue.length;
    const currentLevel = [];
    for (let i = 0; i < levelLength; i += 1) {
      const currentNode = queue.shift();
      const isOrderEven = traversalOrder % 2 === 0;
      if (currentNode.value === undefined) {
        throw new Error("each node of the tree must have a value");
      }
      isOrderEven
        ? currentLevel.unshift(currentNode.value)
        : currentLevel.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevel);
    traversalOrder += 1;
  }
  return result;
}

const root = new TreeNode("a");
root.left = new TreeNode("b", new TreeNode("d"), new TreeNode("e"));
root.right = new TreeNode("c");

const result = zigzagTraversal(root);
console.log(result);

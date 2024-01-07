"use strict";
import TreeNode from "../../lib/TreeNode.js";

/**
 * Given a binary tree,it  populate an array
 * to represent its level-by-level traversal.
 * it  populate the values of all nodes
 * of each level from left to right in separate
 *  sub-arrays.
 * @param{object} -root binary tree root node
 * @returns{array}  array of arrays containing each level nodes from left to right
 */

export default function traverseBreadFirst(binaryTreeRoot) {
  const result = [];
  if (!binaryTreeRoot) return result;
  const queue = [binaryTreeRoot];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];
    for (let i = 0; i < levelSize; i += 1) {
      const currentNode = queue.shift();
      currentLevel.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevel);
  }
  return result;
}

const root = new TreeNode("a");
root.left = new TreeNode("b", new TreeNode("d"), new TreeNode("e"));
root.right = new TreeNode("c");

const result = traverseBreadFirst(root);
console.log(result);

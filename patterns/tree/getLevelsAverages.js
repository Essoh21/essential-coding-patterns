"use strict";
import TreeNode from "../../lib/TreeNode.js";

/**
 * Given a binary tree, populate an array
 * to represent the averages of all
 * of its levels
 * @param {Object} - binary tree root node
 * @returns {number[]} -list of each level average
 *
 */

export default function getLevelsAverages(treeRootNode) {
  const result = [];
  if (!treeRootNode) return result;
  const queue = [treeRootNode];

  // traverse the tree in level order and get each level values
  while (queue.length > 0) {
    let levelSum = 0;
    const levelLength = queue.length;

    for (let i = 0; i < levelLength; i += 1) {
      const currentNode = queue.shift();
      if (currentNode.value === undefined) {
        throw new Error("each node of the tree must have a value ");
      }
      levelSum += currentNode.value;
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    const levelAverage = Number((levelSum / levelLength).toFixed(3));
    result.push(levelAverage);
  }
  //return levels averages
  return result;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level averages are: ${getLevelsAverages(root)}`);

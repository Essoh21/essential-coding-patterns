"use strict";
import TreeNode from "../../../lib/TreeNode.js";

/**
 * Given a binary tree and a number s, find all paths in
 * the tree such that the sum of all the node values of
 * each path equals s. Please note that the path can
 * start or end at any node but all paths
 * must follow direction from parent to child (top to bottom)
 * @param {Object} rootNode - binary tree root node
 * @param {number} s - sum that path nodes values must sum to
 * @returns {Array} - list of paths that sum to s
 */
export default function getAllPathsForSum(rootNode, s) {
  if (!rootNode || s <= 0) throw new Error("Invalid rootNode or s");
  const result = [];

  function dfs(node, currentPath, currentSum) {
    if (!node) return;

    currentSum += node.value;
    currentPath.push(node.value);

    // Check for paths that sum to s
    while (currentSum > s) {
      currentSum -= currentPath.shift();
    }

    if (currentSum === s) {
      result.push([...currentPath]);
    }
    // explore left and right
    dfs(node.left, currentPath.slice(), currentSum);
    dfs(node.right, currentPath.slice(), currentSum);
  }

  dfs(rootNode, [], 0);
  return result;
}

//
/* const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(16);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.right.left = new TreeNode(23);
console.log(getAllPathsForSum(root, 23));
 */
//time complexity o(n) n is the number of nodes in the tree
// space complexity o(H) H is the depth

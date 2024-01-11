"use strict";
import TreeNode from "../../../lib/TreeNode.js";

/**
 *
 * Given a binary tree where each node can only have a
 * digit (0-9) value, each root-to-leaf path will
 * represent a number. find the total sum of all
 * the numbers represented by all paths.
 *   @param {Object} root -binary tree root node
 * @returns {number} sum of all numbers represented by all paths
 *
 */

export default function getSumOfPathNumbers(root) {
  if (!root)
    throw new Error(
      "Invalid root node. Please provide a valid binary tree root node."
    );
  let sum = 0;
  const BASE = 10;
  //traverse the tree using Depth first search approach and get paths
  /**
   * Depth First Search to traverse the tree and calculate the sum of path numbers.
   * @param {Object} node - Current tree node.
   * @param {number} currentSum - Current sum along the path.
   *
   */
  function dfs(node, pathsum) {
    if (!node) return;
    const currentNodeValue = node.value;

    pathsum = pathsum * BASE + currentNodeValue;
    const isLeafNode = !node.left && !node.right;
    if (isLeafNode) {
      sum += pathsum;
    }

    //explore left and right
    dfs(node.left, pathsum);
    dfs(node.right, pathsum);

    // remove currentNodeValue before backtracking
  }

  // traverse root
  dfs(root, 0);

  return sum;
}

/* const root = new TreeNode(1);
root.left = new TreeNode(5);
root.right = new TreeNode(3);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.left.right = new TreeNode(1);
root.right.right = new TreeNode(0);

console.log("sum: ", getSumOfPathNumbers(root)); */

// space and time complexity o(n) n is the number of nodes in the tree

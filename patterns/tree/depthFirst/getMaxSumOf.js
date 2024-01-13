"use strict";
import TreeNode from "../../../lib/TreeNode.js";

/**
 * function to find the path with the maximum
 * sum in a given binary tree and return that sum.
 * A path is defined as a sequence of nodes between
 * any two nodes and doesn't neecessarily pass
 * through the root. The path must contain at least one node.
 * @param {Object} root node
 * @returns {number} the maximum sum path's sum.
 */
export default function getMaxSumOf(root) {
  if (!root) throw new error("tree must contain at least one node");
  let maxSum = Number.NEGATIVE_INFINITY;

  const maxPathSum = (node) => {
    if (!node) return 0;
    // get max path sum for left and right
    const leftSum = Math.max(0, maxPathSum(node.left));
    const rightSum = Math.max(0, maxPathSum(node.right));

    maxSum = Math.max(maxSum, leftSum + rightSum + node.value);
    return Math.max(leftSum, rightSum) + node.value;
  };

  maxPathSum(root);
  //
  return maxSum;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(20);
root.right.left = new TreeNode(15);
console.log(getMaxSumOf(root), "max sum");

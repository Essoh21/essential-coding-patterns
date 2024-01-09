"use strict";
import TreeNode from "../../../lib/TreeNode.js";

/**
 * Given a binary tree and a number S, find if
 * the tree has a path from root-to-leaf
 *  such that the sum of all the node values
 * of that path equals S.
 * @param {Object}  tree root Node
 * @param {number}  number path values sum should be equal to
 * @returns {boolean} true if tree has path and false otherway
 */

export default function hasPath(root, n) {
  if (!root) return false;
  if (root.value === n && root.left === null && root.right === null) {
    return true;
  }
  return (
    hasPath(root.left, n - root.value) || hasPath(root.right, n - root.value)
  );
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(hasPath(root, 28));

//o(n) time and space ; n = nber of nodes

"use strict";
import TreeNode from "../../../lib/TreeNode.js";

/**
 * Checks if a given sequence is present as a root-to-leaf path in the binary tree.
 * @param {Object} root - Binary tree root node.
 * @param {number[]} sequence - Target sequence to check.
 * @returns {boolean} - True if the sequence is present, false otherwise.
 */
export function isSequencePresent(root, sequence) {
  if (!root || !sequence || sequence.length === 0) {
    return false;
  }

  /**
   * Helper function to perform DFS and check for the presence of the sequence.
   * @param {Object} node - Current tree node.
   * @param {number[]} currentPath - Current path being traversed.
   * @param {number} index - Current index in the sequence.
   * @returns {boolean} - True if the sequence is present, false otherwise.
   */
  function dfs(node, currentPath, index) {
    if (!node || index >= sequence.length || node.value !== sequence[index]) {
      return false;
    }

    const isLeafNode =
      !node.left && !node.right && index === sequence.length - 1;
    if (isLeafNode) {
      return true;
    }

    // explore left and right
    return (
      dfs(node.left, currentPath.concat(node.value), index + 1) ||
      dfs(node.right, currentPath.concat(node.value), index + 1)
    );
  }

  // traverse dfs
  return dfs(root, [], 0);
}

const root = new TreeNode(1);
root.left = new TreeNode(7);
root.right = new TreeNode(9);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(2);

const sequence = [1, 7, 2];

console.log("Is sequence present: ", isSequencePresent(root, sequence));

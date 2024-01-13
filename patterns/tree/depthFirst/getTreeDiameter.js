"use strict";
import TreeNode from "../../../lib/TreeNode.js";
/**
 * Given a binary tree, find the lenght of its diameter. the
 * diameter of a tree is the number of nodes on the longest
 *  path between any two leaf nodes . The diameter of a tree
 * may or may not pass through the root.
 * @param {Object} tree root node
 * @returns {number} number of nodes in the longest path between two leaf nodes
 */
export default function getReeDiameter(root) {
  if (!root) throw new Error("invalid input. input must be a binary tree");
  //make sure root has at least two leaf nodes
  if (!root.left || !root.right)
    throw new Error("root must have at least two leaf nodes ");
  let diameter = 0;
  /***
   * function that calculate the height of subtree of a node
   * and update the diameter of the tree
   * @param {Object} node
   * @returns {number} height of subtree of node
   */
  function calculateHeightOf(node) {
    if (!node) return 0;
    //get height of left subtree and right subtree
    const leftHeight = calculateHeightOf(node.left);
    const rightHeight = calculateHeightOf(node.right);

    // update the diameter value whenever leftHeight and reightHeight are known
    diameter = Math.max(diameter, 1 + leftHeight + rightHeight);

    return 1 + Math.max(leftHeight, rightHeight);

    //
  }
  // calculate height of root
  calculateHeightOf(root);
  return diameter;
}

/* //
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);
console.log(getReeDiameter(root), "tree diameter");
 */
//o(n) time and o(h) space complexity. n is the number of nodes and h is the height of the tree

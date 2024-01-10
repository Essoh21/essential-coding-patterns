"use strict";
import TreeNode from "../../../lib/TreeNode.js";

/**
 * Given a binary tree and a number s, find all paths
 * from root-to-leaf such that the sum of all the node
 * values of each path equals s.
 * @param {Object} tree root node
 * @param {number} sum that nodes must be equal to
 * @returns {array} list of paths that sum to sum
 */

export default function getPathsForSum(treeRootNode, sum) {
  if (!treeRootNode || isNaN(sum)) return [];
  const allPathsToSum = [];
  //store all root-to-leaf paths that sum to sum in allPathsToSum
  function traverseDfs(node, currentPath, currentSum) {
    if (!node) return;
    const currentValue = node.value;
    currentSum += currentValue;
    currentPath.push(currentValue);
    const isNodeLeafAndCurrentSumTosum =
      !node.right && !node.left && currentSum === sum;

    if (isNodeLeafAndCurrentSumTosum) {
      //store the path
      allPathsToSum.push([...currentPath]);
    }

    //explore left and right
    traverseDfs(node.left, currentPath, currentSum);
    traverseDfs(node.right, currentPath, currentSum);
    //remove current node value from the path before backtracking
    currentPath.pop();
  }

  traverseDfs(treeRootNode, [], 0);
  //return allPathsTo sum
  return allPathsToSum;
}
/*

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(getPathsForSum(root, 23));
 */
//space complexity o(H) H is the depth of the tree
//time complexity o(n) n is the number of nodes in the tree

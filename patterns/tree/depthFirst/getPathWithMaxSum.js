"use strict";
import TreeNode from "../../../lib/TreeNode.js";

/**
 * Given a biinary tree, find he root-to-leaf path
 * with the maximum sum.
 * @param {Object} binary tree root node
 * @returs  {Array} path with the maximum values sum
 */

export default function getPathWithMaxSum(treeRootNode) {
  if (!treeRootNode) return [];
  let maxSum = Number.NEGATIVE_INFINITY;
  let pathWithMaxSum = [];
  /* traverse the tree in depth first approch and 
  track paths and their values sum */

  function dfs(node, currentPath, pathSum) {
    if (!node) return;
    const currentNodeValue = node.value;
    pathSum += currentNodeValue;
    currentPath.push(currentNodeValue);

    const isLeafNode = !node.left && !node.right;
    if (isLeafNode) {
      //update  maxSum;
      maxSum = Math.max(maxSum, pathSum);
      const isPathWithMaxsum = maxSum === pathSum;
      if (isPathWithMaxsum) {
        pathWithMaxSum = [...currentPath];
      }
    }
    // explore left anf right
    dfs(node.left, currentPath, pathSum);
    dfs(node.right, currentPath, pathSum);

    // remove currentNode value from path before backtrack
    currentPath.pop();
  }
  // traverse
  dfs(treeRootNode, [], 0);
  return pathWithMaxSum;
}

/* const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.right.left = new TreeNode(20);
console.log(getPathWithMaxSum(root, 23));
 */
//space complexity o(H) H is the depth of the tree
//time complexity o(n) n is the number of nodes in the tree

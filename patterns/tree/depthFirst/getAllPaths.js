"use strict";
import TreeNode from "../../../lib/TreeNode.js";

/**
 *
 * Given a binary tree, retrun all root-to-leaf paths.
 * @param {Object} binary tree root node
 * @returns {Array} list of paths.
 */

export default function getAllPaths(treeRootNode) {
  if (!treeRootNode) return [];
  const allPaths = [];
  //traverse the tree in depth first mode and store allPaths
  function dfs(node, currentPath) {
    if (!node) return;
    const currentNodeValue = node.value;
    currentPath.push(currentNodeValue);
    const isNodeLeaf = !node.left && !node.right;
    if (isNodeLeaf) {
      //store currentPath
      allPaths.push([...currentPath]);
    }

    // explore left and right
    dfs(node.left, currentPath);
    dfs(node.right, currentPath);

    // remove currentValue from currentPath before backTrack
    currentPath.pop();
  }
  //traverse treeRootNode
  dfs(treeRootNode, []);

  // return allPaths
  return allPaths;
}

/* const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(getAllPaths(root, 23)); */

//space complexity o(H) H is the depth of the tree
//time complexity o(n) n is the number of nodes in the tree

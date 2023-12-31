"use strict";

/**
 * Tree Node constructor
 * @returns{object} Tree node constructor
 *
 */
export default class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {

    // Empty tree
    if (this.root === null) return 0;

    function getMinDepth(node) {
      // Base case: if there's no node, depth is 0
      if (!node) return 0;

      // Leaf node, depth is 1
      if (!node.left && !node.right) return 1;

      // If one child is missing, we need to only consider the non-null child
      if (!node.left) return getMinDepth(node.right) + 1;
      if (!node.right) return getMinDepth(node.left) + 1;

      // Recursively find the min depth of both children and add 1 for current node
      return Math.min(getMinDepth(node.left), getMinDepth(node.right)) + 1;
    }

    // Start from the root
    return getMinDepth(this.root);
  }


  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

    // Empty tree
    if (this.root === null) return 0;

    function getMaxDepth(node) {

      // Base case: if there's no node, depth is 0
      if (!node) return 0;

      // Leaf node, depth is 1
      if (!node.left && !node.right) return 1;

      // If one child is missing, consider only the non-null child
      if (!node.left) return getMaxDepth(node.right) + 1;
      if (!node.right) return getMaxDepth(node.left) + 1;

      // Recursively find the max depth of both children and add 1 for current node
      return Math.max(getMaxDepth(node.left), getMaxDepth(node.right)) + 1;
    }

    // Start from the root
    return getMaxDepth(this.root);
  }


  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

    // Use an object to hold the max sum across all recursive calls
    let result = { max: -Infinity };

    function findMaxSum(node) {

      // Base case: If node is null, sum is 0
      if (!node) return 0;

      // Recursively find the max sum of the left and right subtrees
      let leftSum = Math.max(findMaxSum(node.left), 0); // Ignore negative sums by using Math.max(..., 0)
      let rightSum = Math.max(findMaxSum(node.right), 0); // Same for the right subtree

      // Current path sum that passes through the node (node value + max sum of both subtrees)
      let currentPathSum = node.val + leftSum + rightSum;

      // Update the global max sum if the current path sum is larger
      result.max = Math.max(result.max, currentPathSum);

      // Return the max sum path that can be extended upward (choose either left or right)
      return node.val + Math.max(leftSum, rightSum);
    }

    // Start recursion from the root
    findMaxSum(this.root);

    return result.max === -Infinity ? 0 : result.max; // Return the result, handle empty tree case
  }


  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let result = null;

    function findNextLarger(node) {

      // Base case: If node is null, just return
      if (!node) return;

      // Check the current node's value
      if (node.val > lowerBound && (result === null || node.val < result)) {

        // Update result if the current node is a better candidate
        result = node.val;
      }

      // Recurse on both left and right subtrees
      findNextLarger(node.left);
      findNextLarger(node.right);
    }

    // Start recursion from the root
    findNextLarger(this.root);

    // Return the result, which might still be null if no value was found
    return result;
  }


  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };

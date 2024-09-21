/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    // If there's no root node, return 0 (base case)
    if (this.root === null) return 0;

    // Helper function to handle the recursion
    function sum(node) {
      // Start with the current node's value
      let total = node.val;

      // Recur for each child node
      for (let child of node.children) {
        total += sum(child); // add the result of summing each child
      }

      return total;
    }

    // Start recursion from the root
    return sum(this.root);
  }


  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (this.root === null) return 0;

    function count(node) {
      // Check if the current node's value is even
      let evens = (node.val % 2 === 0 ? 1 : 0);

      for (let child of node.children) {
        // Recur for each child
        evens += count(child);
      }

      return evens;
    }

    return count(this.root);
  }


  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (this.root === null) return 0;

    function countGreater(node) {
      // Check if the current node's value is greater than lowerBound
      let count = (node.val > lowerBound ? 1 : 0);

      for (let child of node.children) {
        // Recur for each child
        count += countGreater(child);
      }

      return count;
    }

    return countGreater(this.root);
  }

}

module.exports = { Tree, TreeNode };

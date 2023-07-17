"use strict";

const Node = require("./binary-tree/Node");
const BinarySearchTree = require("./binary-tree/BinaryTree");

let tree = new BinarySearchTree();

// Add nodes to the binary search tree
tree.add(5);
tree.add(3);
tree.add(7);
tree.add(2);
tree.add(4);
tree.add(6);
tree.add(8);

console.log(tree);

console.log("preOrder:", tree.preOrder());
console.log("inOrder:", tree.inOrder());
console.log("postOrder:", tree.postOrder());

console.log("Contains 6:", tree.contains(6));
console.log("Contains 9:", tree.contains(9));

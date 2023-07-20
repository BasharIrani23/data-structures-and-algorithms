"use strict";

const Node = require("./Node");

class BinaryTree {
  constructor() {
    this.Root = null;
  }

  // Pre-order: root >> left >> right
  preOrder() {
    let array = [];
    const traversal = (node) => {
      array.push(node.value);
      if (node.left !== null) traversal(node.left);
      if (node.right) traversal(node.right);
    };
    traversal(this.Root);
    return array;
  }
  // // left >> root >> right
  inOrder() {
    let array = [];
    const traversal = (node) => {
      if (node.left !== null) traversal(node.left);
      array.push(node.value);
      if (node.right) traversal(node.right);
    };
    traversal(this.Root);
    return array;
  }
  // // left >> right >> root
  postOrder() {
    let array = [];
    const traversal = (node) => {
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
      array.push(node.value);
    };
    traversal(this.Root);
    return array;
  }

  findmax() {
    let currentNode = this.Root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }

  findmin() {
    let currentNode = this.Root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  isEmpty() {
    return this.Root === null;
  }
}

class BinarySearchTree extends BinaryTree {
  Add(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) this.Root = newNode;
    else this.AddNode(this.Root, newNode);
  }

  AddNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) root.left = newNode;
      else this.AddNode(root.left, newNode);
    }
    if (newNode.value > root.value) {
      if (root.right === null) root.right = newNode;
      else this.AddNode(root.right, newNode);
    }
  }

  Contain(root, value) {
    if (!root) return false;
    else {
      if (root.value === value) return true;
      else if (value < root.value) return this.Contain(root.left, value);
      else if (value > root.value) return this.Contain(root.right, value);
    }

    return false;
  }
}

module.exports = BinarySearchTree;

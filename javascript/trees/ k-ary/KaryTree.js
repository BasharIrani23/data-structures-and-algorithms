"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class KaryTree {
  constructor() {
    this.root = null;
  }

  Add(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) this.root = newNode;
    else this.AddNode(this.root, newNode);
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

  isEmpty() {
    return this.root === null;
  }
}

function fizzBuzzTree(karyTree) {
  if (!karyTree.root) {
    return new KaryTree();
  }

  function fizzBuzzTraversal(node) {
    let value = node.value.toString();

    if (node.value % 3 === 0) {
      value = "Fizz";
    }

    if (node.value % 5 === 0) {
      value = value === "Fizz" ? "FizzBuzz" : "Buzz";
    }

    const newNode = new Node(value);

    for (const child of node.children) {
      const newChild = fizzBuzzTraversal(child);
      newNode.children.push(newChild);
    }

    return newNode;
  }

  const newTree = new KaryTree();
  newTree.root = fizzBuzzTraversal(karyTree.root);
  return newTree;
}

module.exports = { Node, KaryTree, fizzBuzzTree };

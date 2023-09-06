class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = new Node(value);
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = new Node(value);
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }
}

class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    return key.toString().length % this.size;
  }

  add(key, value) {
    let hash = this.hash(key);
    if (!this.map[hash]) {
      this.map[hash] = [];
    }
    this.map[hash].push([key, value]);
  }

  contains(key) {
    let hash = this.hash(key);
    return this.map[hash]
      ? this.map[hash].some((pair) => pair[0] === key)
      : false;
  }
}

function tree_intersection(tree1, tree2) {
  const map = new Hashmap(500);
  const result = new Set();

  function inorderTraversal(node, callback) {
    if (node) {
      inorderTraversal(node.left, callback);
      callback(node.value);
      inorderTraversal(node.right, callback);
    }
  }

  // Populate the hashmap with tree1's values
  inorderTraversal(tree1.root, (value) => {
    map.add(value, true);
  });

  // Check tree2's values against hashmap and add to result set if exists
  inorderTraversal(tree2.root, (value) => {
    if (map.contains(value)) {
      result.add(value);
    }
  });

  return result;
}

// Testing
const tree1 = new BinaryTree();
tree1.insert(10);
tree1.insert(5);
tree1.insert(15);
tree1.insert(20);

const tree2 = new BinaryTree();
tree2.insert(5);
tree2.insert(10);
tree2.insert(25);
tree2.insert(30);

const intersection = tree_intersection(tree1, tree2);
console.log([...intersection]); // [5, 10]

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    let arr = [];
    const traversal = (node) => {
      if (node) {
        arr.push(node.value);
        traversal(node.left);
        traversal(node.right);
      }
    };
    traversal(this.root);
    return arr;
  }

  inOrder() {
    let arr = [];
    const traversal = (node) => {
      if (node) {
        traversal(node.left);
        arr.push(node.value);
        traversal(node.right);
      }
    };
    traversal(this.root);
    return arr;
  }

  postOrder() {
    let arr = [];
    const traversal = (node) => {
      if (node) {
        traversal(node.left);
        traversal(node.right);
        arr.push(node.value);
      }
    };
    traversal(this.root);
    return arr;
  }
}

class BinarySearchTree extends BinaryTree {
  add(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            break;
          }
          current = current.right;
        }
      }
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return true;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}
module.exports = BinarySearchTree;

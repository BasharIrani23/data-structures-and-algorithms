const Node = require("./binary-tree/Node");
const BinaryTree = require("./binary-tree/BinaryTree");
const BinarySearchTree = require("./binary-tree/BinarySearchTree");

let tree = null;
let bst = null;

describe("Binary Tree and Binary Search Tree Testing", () => {
  beforeEach(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    three.left = four;
    three.right = five;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;

    tree = new BinaryTree(one);
    bst = new BinarySearchTree();
  });

  it("should create an empty binary tree", () => {
    const newTree = new BinaryTree();
    expect(newTree.root).toBeNull();
  });

  it("should create a binary tree with root node", () => {
    expect(tree.root.value).toEqual(1);
  });

  it("should perform pre-order traversal on binary tree correctly", () => {
    const expectedResult = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    const result = tree.preOrder();
    expect(result).toEqual(expectedResult);
  });

  it("should add nodes to the binary search tree correctly", () => {
    bst.add(5);
    bst.add(3);
    bst.add(7);
    bst.add(2);
    bst.add(4);
    bst.add(6);
    bst.add(8);
    const expectedResult = [2, 3, 4, 5, 6, 7, 8];
    const result = bst.inOrder();
    expect(result).toEqual(expectedResult);
  });

  it("should check if a value exists in the binary search tree correctly", () => {
    expect(bst.contains(6)).toBe(true);
    expect(bst.contains(9)).toBe(false);
  });
});

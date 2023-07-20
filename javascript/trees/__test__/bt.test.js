"use strict";

const BT = require("../binary-tree/BinaryTree");

describe("test all", () => {
  it("Can successfully instantiate an empty tree", () => {
    let tree = new BT();
    expect(tree instanceof BT).toBeTruthy();
  });
  it("Can successfully instantiate a tree with a single root node", () => {
    let tree = new BT();
    tree.Add(1);
    expect(tree.Root.value).toBe(1);
  });
  it("For a Binary Search Tree, can successfully add a left child and right child properly to a node", () => {
    let tree = new BT();
    tree.Add(10);
    tree.Add(5);
    tree.Add(15);
    expect(tree.Root.value).toBe(10);
    expect(tree.Root.left.value).toBe(5);
    expect(tree.Root.right.value).toBe(15);
  });
  it("Can successfully return a collection from a pre-order traversal", () => {
    let tree = new BT();
    tree.Add(10);
    tree.Add(12);
    tree.Add(5);
    tree.Add(4);
    expect(tree.preOrder()).toEqual([10, 5, 4, 12]);
  });
  it("Can successfully return a collection from an in-order traversal", () => {
    let tree = new BT();
    tree.Add(10);
    tree.Add(12);
    tree.Add(5);
    tree.Add(4);
    expect(tree.inOrder()).toEqual([4, 5, 10, 12]);
  });
  it("Can successfully return a collection from an post-order traversal", () => {
    let tree = new BT();
    tree.Add(10);
    tree.Add(12);
    tree.Add(5);
    tree.Add(4);
    expect(tree.postOrder()).toEqual([4, 5, 12, 10]);
  });
  it("Returns true/false for the contains method, given an existing or non-existing node value", () => {
    let tree = new BT();
    tree.Add(10);
    tree.Add(12);
    tree.Add(5);
    tree.Add(4);
    expect(tree.Contain(tree.Root, 12)).toBeTruthy();
    expect(tree.Contain(tree.Root, 20)).toBeFalsy();
  });
});

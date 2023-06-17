"use strict";

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  includes(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    let currentNode = this.head;
    let result = "";
    while (currentNode) {
      result += `{ ${currentNode.data} } -> `;
      currentNode = currentNode.next;
    }
    result += "NULL";
    return result;
  }
}

const ll = new LinkedList();
ll.insert("a");
ll.insert("b");
ll.insert("c");

console.log(ll.toString()); // "{ c } -> { b } -> { a } -> NULL"

module.exports = { LinkedList, Node };

"use strict";

const Node = require("./Node");

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
  }
  dequeue() {
    if (this.isEmpty()) return null;
    else {
      const temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      this.length--;
      return temp.value;
    }
  }
  peek() {
    if (this.isEmpty()) return null;
    return this.rear.value;
  }
  isEmpty() {
    return this.front === null;
  }
}

module.exports = Queue;

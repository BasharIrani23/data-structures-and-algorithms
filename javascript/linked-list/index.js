"use strict";

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  appendToEnd(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  isInclude(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  getAllValues() {
    const values = [];
    let current = this.head;
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      return;
    }
    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    }
    let current = this.head;
    let previous = null;
    while (current !== null && current.value !== value) {
      previous = current;
      current = current.next;
    }
    if (current === null) {
      return;
    }
    previous.next = newNode;
    newNode.next = current;
    if (current === this.head) {
      this.head = newNode;
    }
    this.size++;
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    let current = this.head;
    while (current !== null && current.value !== value) {
      current = current.next;
    }
    if (current === null) {
      return;
    }
    newNode.next = current.next;
    current.next = newNode;
    if (current === this.tail) {
      this.tail = newNode;
    }
    this.size++;
  }

  kthFromEnd(k) {
    if (k <= 0 || this.head === null) {
      return null;
    }
    let fast = this.head;
    let slow = this.head;
    for (let i = 0; i < k; i++) {
      if (fast === null) {
        return null;
      }
      fast = fast.next;
    }
    while (fast !== null) {
      fast = fast.next;
      slow = slow.next;
    }
    return slow.value;
  }

  zipLists(list1, list2) {
    const zippedList = new LinkedList();
    let current1 = list1.head;
    let current2 = list2.head;
    while (current1 !== null && current2 !== null) {
      zippedList.appendToEnd(current1.value);
      zippedList.appendToEnd(current2.value);
      current1 = current1.next;
      current2 = current2.next;
    }
    while (current1 !== null) {
      zippedList.appendToEnd(current1.value);
      current1 = current1.next;
    }
    while (current2 !== null) {
      zippedList.appendToEnd(current2.value);
      current2 = current2.next;
    }
    return zippedList;
  }

  toString() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    result += "NULL";
    return result;
  }
}

module.exports = { LinkedList, Node };

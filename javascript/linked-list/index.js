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
("use strict");

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
  //append to end of the list
  appendToEnd(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      // If the list is empty, set the new node as both the head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the list is not empty, set the next pointer of the current tail to the new node
      // and update the tail to point to the new node
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  //append
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // isInclude
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
  // printAllList
  getAllValues() {
    const values = [];
    let current = this.head;

    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }
  //adds a new node with the given new value immediately before the first node that has the value specified
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
      zippedList.append(current1.value);
      zippedList.append(current2.value);
      current1 = current1.next;
      current2 = current2.next;
    }

    // If list1 is longer than list2, append the remaining nodes from list1
    while (current1 !== null) {
      zippedList.append(current1.value);
      current1 = current1.next;
    }

    // If list2 is longer than list1, append the remaining nodes from list2
    while (current2 !== null) {
      zippedList.append(current2.value);
      current2 = current2.next;
    }

    return zippedList;
  }

  // convert the node to this format node -> node -> null
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
const list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(5);

const list2 = new LinkedList();
list2.append(2);
list2.append(4);
list2.append(6);
list2.append(8);

const zippedList = list1.zipLists(list1, list2);
console.log(zippedList.toString());

module.exports = LinkedList;
console.log(ll.toString()); // "{ c } -> { b } -> { a } -> NULL"

module.exports = { LinkedList, Node };

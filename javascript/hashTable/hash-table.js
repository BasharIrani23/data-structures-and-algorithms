class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(ele) {
    let newNode = new Node(ele);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }
}

class Hash {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    const hashedKey = key
      .split("")
      .reduce((acc, curr) => acc + curr.charCodeAt(0), 0);
    return (hashedKey * 599) % this.size;
  }

  set(key, val) {
    let hashedValue = this.hash(key);

    if (!this.map[hashedValue]) this.map[hashedValue] = new LinkedList();
    let entry = { [key]: val };
    this.map[hashedValue].add(entry);
  }

  get(key) {
    let index = this.hash(key);
    return this.map[index];
  }

  has(key) {
    let index = this.hash(key);
    if (this.map[index]) return true;
    return false;
  }

  keys() {
    let arr = [];
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i]) {
        let current = this.map[i].head;
        while (current) {
          arr.push(...Object.keys(current.value));
          current = current.next;
        }
      }
    }
    return arr;
  }
}

module.exports = { Hash, Node };

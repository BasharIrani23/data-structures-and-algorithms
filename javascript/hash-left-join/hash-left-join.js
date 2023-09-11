class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(ele) {
    return (
      (ele.split("").reduce((acc, cur) => acc + cur.charCodeAt(0), 0) * 599) %
      this.size
    );
  }

  set(key, value) {
    let hashed = this.hash(key);
    if (!this.map[hashed]) this.map[hashed] = [];
    this.map[hashed].push([key, value]);
  }

  get(key) {
    let hashed = this.hash(key);
    for (let [k, v] of this.map[hashed] || []) {
      if (k === key) return v;
    }
    return null;
  }
}

function left_join(map_1, map_2) {
  let arr = [];

  for (let bucket of map_1.map) {
    if (bucket) {
      for (let [key, value1] of bucket) {
        let value2 = map_2.get(key);
        arr.push([key, value1, value2 !== null ? value2 : null]);
      }
    }
  }

  return arr;
}

module.exports = { HashMap, left_join };

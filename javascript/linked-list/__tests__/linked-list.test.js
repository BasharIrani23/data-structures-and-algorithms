"use strict";

const { LinkedList } = require("../index");

describe("Linked List", () => {
  it("can successfully instantiate an empty linked list", () => {
    const ll = new LinkedList();
    expect(ll.head).toBeNull();
  });

  it("can properly insert values into the linked list", () => {
    const ll = new LinkedList();
    ll.insert("a");
    ll.insert("b");
    ll.insert("c");
    expect(ll.head.data).toBe("c");
    expect(ll.head.next.data).toBe("b");
    expect(ll.head.next.next.data).toBe("a");
  });

  it("will return true when finding a value within the linked list that exists", () => {
    const ll = new LinkedList();
    ll.insert("a");
    ll.insert("b");
    ll.insert("c");
    expect(ll.includes("b")).toBe(true);
  });

  it("will return false when searching for a value in the linked list that does not exist", () => {
    const ll = new LinkedList();
    ll.insert("a");
    ll.insert("b");
    ll.insert("c");
    expect(ll.includes("d")).toBe(false);
  });

  it("can properly convert the linked list to a string representation", () => {
    const ll = new LinkedList();
    ll.insert("a");
    ll.insert("b");
    ll.insert("c");
    expect(ll.toString()).toBe("{ c } -> { b } -> { a } -> NULL");
  });
});

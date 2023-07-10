"use strict";

const { LinkedList } = require("../index");

describe("Linked List (Index Implementation)", () => {
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

const { LinkedList: LinkedList2 } = require("../otherLinkedList");

describe("Linked List (Other Implementation)", () => {
  it("head should be empty", () => {
    const ll = new LinkedList2();
    expect(ll.head).toBeNull();
  });

  it("should append values into the linked list", () => {
    const ll = new LinkedList2();
    ll.append(30);
    expect(ll.head.value).toEqual(30);
    ll.append(10);
    ll.append(20);
    expect(ll.head.next.value).toEqual(10);
  });

  it("should return true when finding a value in the linked list", () => {
    const ll = new LinkedList2();
    ll.append(20);
    ll.append(30);
    expect(ll.isInclude(30)).toBe(true);
  });

  it("should return false when not finding a value in the linked list", () => {
    const ll = new LinkedList2();
    ll.append(20);
    ll.append(30);
    expect(ll.isInclude(40)).toBe(false);
  });

  it("should return all values in the list", () => {
    const ll = new LinkedList2();
    ll.append(10);
    ll.append(20);
    ll.append(30);
    const values = ll.getAllValues();
    expect(values).toEqual([10, 20, 30]);
  });
});

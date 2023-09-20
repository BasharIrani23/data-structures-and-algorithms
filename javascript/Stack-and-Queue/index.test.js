"use strict";

const Queue = require("./queue");
const Stack = require("./stack");

//// test the queue
describe("Queue testing", () => {
  it("Creates a new stack", () => {
    const queue = new Queue();
    expect(queue instanceof Queue).toBeTruthy();
  });

  it("peek on an empty queue", () => {
    const queue = new Queue();
    expect(queue.peek()).toBeNull();
  });

  it("enqueue to queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.rear.value).toEqual(1);
    queue.enqueue(2);
    expect(queue.rear.value).toEqual(2);
    queue.enqueue(3);
    expect(queue.rear.value).toEqual(3);
    expect(queue.length).toEqual(3);
  });

  it("peek on enqueue to queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);
    queue.enqueue(2);
    expect(queue.peek()).toEqual(2);
    queue.enqueue(3);
    expect(queue.peek()).toEqual(3);
    expect(queue.length).toEqual(3);
  });

  it("dequeue from the queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);

    queue.dequeue();

    expect(queue.rear.value).toEqual(5);
    expect(queue.length).toEqual(4);
  });

  //// test the Stack
  it("Creates a new stack", () => {
    const stack = new Stack();
    expect(stack instanceof Stack).toBeTruthy();
  });

  it("peek on an epty stack", () => {
    const stack = new Stack();
    expect(stack.peek()).toBeNull();
  });

  it("push to stack", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toEqual(1);
    stack.push(2);
    expect(stack.top.value).toEqual(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
    expect(stack.length).toEqual(3);
  });

  it("peek on push to stack", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
    stack.push(3);
    expect(stack.peek()).toEqual(3);
    expect(stack.length).toEqual(3);
  });

  it("pop from the stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    stack.pop();

    expect(stack.top.value).toEqual(4);
    expect(stack.length).toEqual(4);
  });
});

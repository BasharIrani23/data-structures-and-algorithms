"use strict";

const Queue = require("./queue");
const Stack = require("./stack");

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
queue.dequeue();
console.log(queue);

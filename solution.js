const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.minStack = new Stack(); // For finding the minimum value
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;

    // Update the minimum stack
    if (!this.minStack.top || data <= this.minStack.top.data) {
      this.minStack.push(data);
    }
  }

  size() {
    let count = 0;
    let current = this.top;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  pop() {
    if (!this.top) return null;

    // Update the minimum stack
    if (this.top.data === this.minStack.top.data) {
      this.minStack.pop();
    }

    const removedData = this.top.data;
    this.top = this.top.next;
    return removedData;
  }

  isEmpty() {
    return this.top === null;
  }

  findMin() {
    if (!this.minStack.top) return null;
    return this.minStack.top.data;
  }

  peek() {
    if (!this.top) return null;
    return this.top.data;
  }

  
 // Bonus: Sort the stack in ascending order using only stacks (no arrays)
sort() {
  const tempStack = new Stack();

  while (!this.isEmpty()) {
    const temp = this.pop();

    while (!tempStack.isEmpty() && tempStack.peek() < temp) { 
      this.push(tempStack.pop());
    }

    tempStack.push(temp);
  }

  this.top = tempStack.top;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  size() {
    let count = 0;
    let current = this.first;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
  }

  dequeue() {
    if (!this.first) return null;
    const removedData = this.first.data;
    this.first = this.first.next;
    return removedData;
  }

  findMax() {
    let max = null;
    let current = this.first;
    while (current) {
      if (max === null || current.data > max) {
        max = current.data;
      }
      current = current.next;
    }
    return max;
  }

  getLast() {
    if (!this.last) return null;
    return this.last.data;
  }

  isEmpty() {
    return this.first === null;
  }

  peek() {
    if (!this.first) return null;
    return this.first.data;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};

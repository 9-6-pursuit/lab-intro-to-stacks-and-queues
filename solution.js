const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (!this.top) throw new Error("The Stack Is Empty!");
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }

  size() {
    let count = 0;
    let currentNode = this.top;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  isEmpty() {
    return !this.top ? true : false;
  }
  peek() {
    if (!this.top) {
      throw new Error("The Stack Is Empty!");
    }
    return this.top;
  }

  findMin() {
    if (!this.top) {
      throw new Error("The Stack Is Empty!");
    }
    let minVal = this.top.data;
    let currentNode = this.top;
    while (currentNode) {
      if (currentNode.data < minVal) {
        minVal = currentNode.data;
      }
      currentNode = currentNode.next;
    }
    return minVal;
  }

  sort() {
    if (!this.top) {
      throw new Error("The Stack Is Empty!");
    }

    let arr = [];
    let item = this.top;
    while (item) {
      arr.push(item.data);
      item = item.next;
    }
    arr.sort();
    this.top = null; // clear og stack
    for (let i = arr.length - 1; i >= 0; i--) {
      this.push(arr[i]);
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = 0;
  }

  enqueue(data) {
    let newNode = new Node(data);
    !this.first
      ? (this.first = newNode) && (this.last = newNode)
      : (this.last.next = newNode) && (this.last = newNode);
    return this.size++;
  }

  dequeue() {
    if (this.first === null) {
      throw new Error("The Queue Is Empty!");
    }
    const item2Dequeue = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return item2Dequeue.data;
  }
  count() {
    if (this.first === null) throw new Error("The Queue Is Empty!");
    return this.size;
  }

  isEmpty() {
    return this.first === null ? true : false;
  }

  peek() {
    return this.first === null ? null : this.first;
  }

  getLast() {
    return this.first === null ? null : this.last;
  }

  findMax() {
    if (this.first === null) throw newError("The Queue Is Empty!");

    let currVal = this.first;
    let maxVal = this.first.data;

    while (currVal) {
      currVal.data > maxVal ? maxVal = currVal.data : currVal = currVal.next;
    }
    return maxVal;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
